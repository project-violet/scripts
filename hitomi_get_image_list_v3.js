// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 28:
case 966:
case 78:
case 1159:
case 1189:
case 1464:
case 3572:
case 2608:
case 3346:
case 3008:
case 1675:
case 2781:
case 337:
case 1548:
case 320:
case 390:
case 2566:
case 269:
case 3148:
case 292:
case 222:
case 1581:
case 943:
case 722:
case 1634:
case 3912:
case 2028:
case 182:
case 3998:
case 3965:
case 3265:
case 80:
case 3559:
case 309:
case 3443:
case 4070:
case 3668:
case 2455:
case 2334:
case 3225:
case 3925:
case 3316:
case 2485:
case 139:
case 296:
case 2526:
case 897:
case 1106:
case 1150:
case 796:
case 2068:
case 1180:
case 3192:
case 561:
case 1308:
case 914:
case 1046:
case 107:
case 2878:
case 3550:
case 2792:
case 999:
case 2733:
case 3242:
case 962:
case 667:
case 3884:
case 2676:
case 2872:
case 3083:
case 1409:
case 991:
case 440:
case 921:
case 2387:
case 3165:
case 2357:
case 1302:
case 1272:
case 1331:
case 3493:
case 2653:
case 3112:
case 712:
case 3076:
case 2712:
case 150:
case 310:
case 1030:
case 652:
case 3981:
case 3251:
case 1512:
case 3951:
case 770:
case 3866:
case 3615:
case 11:
case 428:
case 1289:
case 1989:
case 58:
case 131:
case 2889:
case 495:
case 425:
case 1959:
case 1259:
case 3933:
case 1784:
case 2105:
case 2022:
case 1525:
case 3918:
case 3705:
case 1096:
case 301:
case 3142:
case 761:
case 1400:
case 1456:
case 3330:
case 261:
case 656:
case 1486:
case 3622:
case 3292:
case 3992:
case 4011:
case 2602:
case 376:
case 2806:
case 2850:
case 1980:
case 1376:
case 2880:
case 216:
case 1542:
case 2045:
case 1383:
case 3002:
case 2631:
case 3019:
case 3797:
case 646:
case 893:
case 3388:
case 2120:
case 1556:
case 1500:
case 3358:
case 3040:
case 1847:
case 1573:
case 1804:
case 2247:
case 2773:
case 2169:
case 1442:
case 2335:
case 1938:
case 2094:
case 3478:
case 2700:
case 1213:
case 1913:
case 2786:
case 103:
case 2813:
case 4039:
case 3341:
case 1761:
case 2649:
case 3501:
case 2217:
case 938:
case 2917:
case 1817:
case 935:
case 2610:
case 805:
case 2129:
case 1509:
case 849:
case 3010:
case 34:
case 2577:
case 1465:
case 2709:
case 1498:
case 3311:
case 4030:
case 642:
case 1088:
case 947:
case 1319:
case 2160:
case 288:
case 431:
case 125:
case 285:
case 3760:
case 1340:
case 1412:
case 1193:
case 1101:
case 785:
case 2521:
case 41:
case 1399:
case 3861:
case 3256:
case 3900:
case 3644:
case 1113:
case 1138:
case 2555:
case 1869:
case 486:
case 1418:
case 2007:
case 1433:
case 1082:
case 841:
case 1755:
case 1079:
case 4046:
case 2104:
case 3027:
case 2671:
case 3538:
case 2997:
case 2297:
case 2627:
case 1663:
case 3071:
case 3513:
case 3480:
case 2220:
case 3450:
case 3406:
case 1336:
case 1897:
case 1201:
case 1901:
case 49:
case 1623:
case 42:
case 1993:
case 1293:
case 588:
case 1860:
case 115:
case 2960:
case 585:
case 2893:
case 2832:
case 2636:
case 1143:
case 3909:
case 1564:
case 3067:
case 1232:
case 1932:
case 3614:
case 1829:
case 1091:
case 3382:
case 3543:
case 2229:
case 2929:
case 3877:
case 953:
case 3821:
case 1481:
case 4016:
case 3717:
case 2466:
case 844:
case 2117:
case 266:
case 2596:
case 651:
case 766:
case 1157:
case 2745:
case 4061:
case 2411:
case 2025:
case 1522:
case 2102:
case 2131:
case 3295:
case 306:
case 3731:
case 969:
case 743:
case 697:
case 2605:
case 387:
case 23:
case 3122:
case 1054:
case 371:
case 2042:
case 1084:
case 3587:
case 2722:
case 60:
case 3162:
case 3435:
case 3354:
case 1275:
case 1975:
case 1305:
case 360:
case 2762:
case 926:
case 700:
case 1808:
case 1730:
case 654:
case 16:
case 2908:
case 2208:
case 3115:
case 2458:
case 3776:
case 1515:
case 2012:
case 214:
case 3928:
case 880:
case 524:
case 594:
case 374:
case 229:
case 2183:
case 3753:
case 762:
case 1234:
case 519:
case 4021:
case 1934:
case 3816:
case 3783:
case 2065:
case 791:
case 291:
case 221:
case 2359:
case 53:
case 2389:
case 181:
case 2033:
case 3922:
case 543:
case 1568:
case 1595:
case 1026:
case 912:
case 2768:
case 257:
case 1831:
case 856:
case 2795:
case 2231:
case 2931:
case 2546:
case 970:
case 2202:
case 1680:
case 3839:
case 3463:
case 2887:
case 566:
case 1287:
case 2479:
case 3245:
case 3945:
case 1606:
case 1650:
case 562:
case 599:
case 1134:
case 719:
case 2283:
case 2350:
case 2306:
case 2976:
case 2276:
case 2048:
case 1414:
case 294:
case 1672:
case 500:
case 2108:
case 1528:
case 3215:
case 1659:
case 1066:
case 916:
case 3708:
case 2470:
case 2081:
case 3681:
case 659:
case 3651:
case 1175:
case 2403:
case 1037:
case 3534:
case 3962:
case 2199:
case 1770:
case 3664:
case 2338:
case 3841:
case 3475:
case 3523:
case 2064:
case 2617:
case 1235:
case 1703:
case 2210:
case 2416:
case 1347:
case 3767:
case 649:
case 2874:
case 168:
case 2591:
case 1123:
case 3114:
case 1428:
case 608:
case 2570:
case 2171:
case 2604:
case 1819:
case 238:
case 2240:
case 2219:
case 3771:
case 2647:
case 735:
case 3727:
case 2190:
case 2582:
case 1085:
case 3811:
case 1055:
case 1507:
case 1163:
case 3004:
case 3563:
case 3107:
case 2744:
case 1752:
case 3144:
case 747:
case 247:
case 3624:
case 1317:
case 3294:
case 985:
case 3994:
case 2936:
case 2541:
case 3609:
case 1320:
case 1758:
case 1397:
case 1836:
case 1632:
case 3914:
case 3214:
case 1223:
case 2267:
case 3803:
case 3749:
case 1369:
case 3891:
case 3574:
case 1077:
case 3710:
case 2149:
case 1899:
case 489:
case 3361:
case 3870:
case 2558:
case 875:
case 878:
case 2629:
case 173:
case 2086:
case 3194:
case 613:
case 3852:
case 2496:
case 3244:
case 2511:
case 2073:
case 3882:
case 1422:
case 3377:
case 3907:
case 3207:
case 3457:
case 2697:
case 2332:
case 3879:
case 2927:
case 2439:
case 1711:
case 2863:
case 3487:
case 1827:
case 1445:
case 3020:
case 753:
case 4084:
case 3740:
case 2119:
case 1360:
case 4054:
case 1594:
case 3719:
case 2393:
case 2077:
case 2135:
case 414:
case 3991:
case 3621:
case 3903:
case 3677:
case 4065:
case 2415:
case 1558:
case 1588:
case 3356:
case 3270:
case 3970:
case 462:
case 1999:
case 1936:
case 1541:
case 2758:
case 2788:
case 2632:
case 2836:
case 2397:
case 3453:
case 2601:
case 1967:
case 1267:
case 565:
case 2174:
case 3032:
case 3774:
case 568:
case 2867:
case 1823:
case 1332:
case 3402:
case 2890:
case 3111:
case 443:
case 3279:
case 1863:
case 153:
case 2871:
case 2360:
case 411:
case 2594:
case 1393:
case 1971:
case 1086:
case 4025:
case 773:
case 918:
case 3540:
case 915:
case 313:
case 466:
case 1056:
case 3807:
case 2422:
case 3844:
case 3252:
case 3952:
case 3661:
case 4081:
case 2347:
case 1416:
case 3723:
case 3043:
case 1874:
case 84:
case 2974:
case 1167:
case 2123:
case 308:
case 3258:
case 2428:
case 1570:
case 3288:
case 3988:
case 833:
case 3599:
case 3536:
case 419:
case 1313:
case 1338:
case 2514:
case 2810:
case 1949:
case 2935:
case 1617:
case 4048:
case 2849:
case 2703:
case 2638:
case 3152:
case 2782:
case 3364:
case 3590:
case 3182:
case 1707:
case 457:
case 925:
case 3894:
case 995:
case 147:
case 573:
case 683:
case 928:
case 3655:
case 1240:
case 4033:
case 1604:
case 135:
case 1219:
case 421:
case 1647:
case 3763:
case 3179:
case 2544:
case 4092:
case 1552:
case 2779:
case 2507:
case 2163:
case 2831:
case 3050:
case 3006:
case 1795:
case 532:
case 1231:
case 4024:
case 1546:
case 91:
case 2680:
case 1902:
case 1372:
case 2957:
case 3845:
case 2287:
case 2987:
case 1479:
case 3239:
case 2606:
case 801:
case 191:
case 121:
case 1033:
case 1452:
case 781:
case 1018:
case 876:
case 2595:
case 2026:
case 317:
case 3637:
case 3392:
case 1051:
case 934:
case 1108:
case 2689:
case 2066:
case 56:
case 1081:
case 3815:
case 3862:
case 3775:
case 2037:
case 1403:
case 3089:
case 2134:
case 1953:
case 1253:
case 1283:
case 589:
case 2853:
case 3734:
case 1976:
case 810:
case 1306:
case 2414:
case 4064:
case 124:
case 397:
case 327:
case 3078:
case 3531:
case 2796:
case 2678:
case 3502:
case 13:
case 2054:
case 2084:
case 1042:
case 581:
case 3196:
case 453:
case 1722:
case 1539:
case 4056:
case 166:
case 1596:
case 4000:
case 2157:
case 1102:
case 2739:
case 2522:
case 4086:
case 3398:
case 92:
case 99:
case 3440:
case 4073:
case 732:
case 232:
case 1458:
case 1530:
case 736:
case 674:
case 820:
case 890:
case 1176:
case 3828:
case 162:
case 3916:
case 1183:
case 3325:
case 1153:
case 1065:
case 2305:
case 3553:
case 30:
case 3410:
case 3583:
case 845:
case 3130:
case 4009:
case 1441:
case 2730:
case 354:
case 848:
case 1208:
case 26:
case 986:
case 3185:
case 1147:
case 2079:
case 1104:
case 3063:
case 3155:
case 1671:
case 1323:
case 2367:
case 3314:
case 2663:
case 1627:
case 1297:
case 2820:
case 3679:
case 2336:
case 3738:
case 2399:
case 3886:
case 3652:
case 2492:
case 3856:
case 3800:
case 3961:
case 503:
case 2138:
case 1007:
case 3504:
case 1724:
case 3547:
case 1044:
case 1585:
case 426:
case 1269:
case 3277:
case 2829:
case 4028:
case 2003:
case 1764:
case 3344:
case 3670:
case 492:
case 1929:
case 1117:
case 540:
case 658:
case 3921:
case 3221:
case 2993:
case 2293:
case 595:
case 2371:
case 525:
case 2901:
case 1014:
case 375:
case 2448:
case 1260:
case 528:
case 598:
case 1893:
case 48:
case 1832:
case 3023:
case 3743:
case 1363:
case 3809:
case 2327:
case 363:
case 1773:
case 3824:
case 1484:
case 2442:
case 1335:
case 3405:
case 2938:
case 1094:
case 3161:
case 6:
case 2213:
case 1700:
case 3520:
case 1813:
case 703:
case 2761:
case 2556:
case 2500:
case 1120:
case 3611:
case 2586:
case 1197:
case 3955:
case 1640:
case 1904:
case 461:
case 1619:
case 3985:
case 1947:
case 1843:
case 470:
case 2132:
case 1709:
case 3074:
case 2498:
case 3688:
case 2943:
case 3732:
case 725:
case 518:
case 2088:
case 295:
case 2319:
case 4062:
case 185:
case 2340:
case 298:
case 228:
case 2058:
case 1521:
case 515:
case 728:
case 798:
case 1649:
case 3394:
case 1917:
case 240:
case 3560:
case 740:
case 3641:
case 2509:
case 1129:
case 3864:
case 3035:
case 64:
case 3266:
case 352:
case 3881:
case 170:
case 2598:
case 3937:
case 879:
case 1859:
case 71:
case 1477:
case 52:
case 1889:
case 3429:
case 37:
case 731:
case 1798:
case 1387:
case 2409:
case 65:
case 1357:
case 981:
case 164:
case 2302:
case 977:
case 3848:
case 2331:
case 672:
case 1653:
case 1683:
case 250:
case 2280:
case 234:
case 1806:
case 1602:
case 2657:
case 676:
case 586:
case 1880:
case 2950:
case 2206:
case 2906:
case 2376:
case 1045:
case 1584:
case 3087:
case 1725:
case 539:
case 1554:
case 3154:
case 1742:
case 2784:
case 3362:
case 2473:
case 1022:
case 3469:
case 2754:
case 3892:
case 2400:
case 3696:
case 3926:
case 984:
case 161:
case 1461:
case 3315:
case 192:
case 169:
case 3616:
case 3812:
case 645:
case 648:
case 550:
case 2551:
case 782:
case 1028:
case 3395:
case 2634:
case 1748:
case 1537:
case 860:
case 609:
case 3898:
case 2737:
case 2159:
case 51:
case 4014:
case 79:
case 29:
case 2464:
case 3137:
case 380:
case 2766:
case 3417:
case 2675:
case 690:
case 1751:
case 2548:
case 2308:
case 2726:
case 806:
case 1792:
case 3126:
case 3984:
case 1733:
case 1718:
case 1375:
case 1205:
case 2424:
case 3254:
case 3404:
case 2533:
case 1455:
case 1334:
case 1485:
case 3825:
case 739:
case 239:
case 3780:
case 126:
case 534:
case 4007:
case 786:
case 286:
case 3750:
case 1095:
case 960:
case 2668:
case 1404:
case 3334:
case 2925:
case 3068:
case 686:
case 3095:
case 1706:
case 396:
case 607:
case 3878:
case 2550:
case 1126:
case 2580:
case 2192:
case 501:
case 1842:
case 2133:
case 1646:
case 2854:
case 3733:
case 2942:
case 1284:
case 3718:
case 62:
case 69:
case 475:
case 889:
case 1075:
case 2572:
case 3608:
case 38:
case 906:
case 3751:
case 2181:
case 790:
case 720:
case 737:
case 836:
case 237:
case 220:
case 290:
case 180:
case 4023:
case 3781:
case 1395:
case 682:
case 748:
case 3748:
case 1368:
case 987:
case 369:
case 392:
case 322:
case 504:
case 572:
case 745:
case 1616:
case 2559:
case 209:
case 1898:
case 1772:
case 2998:
case 1034:
case 3537:
case 2965:
case 971:
case 1469:
case 1184:
case 979:
case 2933:
case 2233:
case 1154:
case 1362:
case 3742:
case 2918:
case 3461:
case 1926:
case 156:
case 1778:
case 2645:
case 1639:
case 1420:
case 3880:
case 463:
case 3602:
case 276:
case 3806:
case 634:
case 1497:
case 1505:
case 3631:
case 3554:
case 3584:
case 2165:
case 3357:
case 2053:
case 2198:
case 3798:
case 2083:
case 1345:
case 3765:
case 2076:
case 3683:
case 3712:
case 1460:
case 312:
case 2948:
case 1848:
case 272:
case 772:
case 2401:
case 590:
case 2951:
case 537:
case 3421:
case 1881:
case 4074:
case 2662:
case 2866:
case 370:
case 152:
case 1266:
case 2981:
case 2281:
case 1429:
case 3889:
case 631:
case 17:
case 2837:
case 2396:
case 2615:
case 1937:
case 1237:
case 3477:
case 61:
case 3062:
case 1560:
case 558:
case 640:
case 2593:
case 1121:
case 2501:
case 3217:
case 868:
case 1177:
case 2729:
case 1035:
case 2532:
case 1641:
case 1864:
case 2109:
case 1529:
case 3577:
case 1074:
case 3843:
case 628:
case 1701:
case 388:
case 2720:
case 2019:
case 2388:
case 146:
case 1285:
case 1569:
case 2885:
case 1255:
case 3204:
case 3640:
case 2924:
case 2224:
case 2694:
case 3335:
case 3454:
case 1405:
case 3773:
case 3169:
case 163:
case 3484:
case 2156:
case 3813:
case 1520:
case 4087:
case 3838:
case 1161:
case 7:
case 1597:
case 3094:
case 3756:
case 2478:
case 2:
case 178:
case 2036:
case 3960:
case 3260:
case 3893:
case 3667:
case 4075:
case 1023:
case 2067:
case 2472:
case 3636:
case 2909:
case 2209:
case 1670:
case 3764:
case 2382:
case 2543:
case 2459:
case 1307:
case 1977:
case 2489:
case 3437:
case 2164:
case 3117:
case 4034:
case 2821:
case 1800:
case 2286:
case 1261:
case 2607:
case 2861:
case 5:
case 2956:
case 2200:
case 2370:
case 1886:
case 3426:
case 1713:
case 3724:
case 1873:
case 3269:
case 3585:
case 3044:
case 1547:
case 2273:
case 2973:
case 3555:
case 2391:
case 3007:
case 2124:
case 3104:
case 2747:
case 3323:
case 3147:
case 2704:
case 3220:
case 2450:
case 2406:
case 1679:
case 2538:
case 3997:
case 873:
case 2071:
case 2480:
case 1583:
case 3875:
case 260:
case 3762:
case 2384:
case 1342:
case 2162:
case 2354:
case 1553:
case 4093:
case 1449:
case 4032:
case 3908:
case 3208:
case 882:
case 154:
case 1576:
case 3441:
case 636:
case 202:
case 274:
case 1828:
case 2776:
case 3012:
case 314:
case 689:
case 2816:
case 2783:
case 1325:
case 3065:
case 89:
case 2474:
case 362:
case 3834:
case 3183:
case 579:
case 1216:
case 3745:
case 3411:
case 3102:
case 3596:
case 366:
case 413:
case 2702:
case 1139:
case 2145:
case 206:
case 632:
case 807:
case 990:
case 937:
case 2968:
case 1440:
case 2995:
case 2295:
case 3605:
case 886:
case 1246:
case 948:
case 945:
case 197:
case 2642:
case 343:
case 3042:
case 311:
case 2587:
case 3539:
case 839:
case 33:
case 771:
case 2005:
case 271:
case 831:
case 2648:
case 901:
case 779:
case 1072:
case 3253:
case 1467:
case 394:
case 502:
case 1508:
case 3380:
case 3350:
case 3976:
case 3728:
case 684:
case 1436:
case 1930:
case 1230:
case 449:
case 850:
case 1815:
case 976:
case 2915:
case 1392:
case 1637:
case 1318:
case 560:
case 3403:
case 408:
case 2262:
case 2962:
case 1666:
case 1862:
case 1059:
case 1775:
case 2681:
case 3033:
case 2922:
case 2692:
case 2337:
case 2896:
case 95:
case 3482:
case 1626:
case 391:
case 321:
case 3359:
case 1381:
case 1146:
case 834:
case 2618:
case 904:
case 677:
case 3092:
case 1471:
case 3231:
case 3931:
case 506:
case 2168:
case 357:
case 3768:
case 1050:
case 1006:
case 3479:
case 1939:
case 1239:
case 3372:
case 4038:
case 803:
case 1685:
case 3647:
case 933:
case 1655:
case 3604:
case 338:
case 3940:
case 2790:
case 3552:
case 1179:
case 417:
case 1763:
case 3190:
case 2811:
case 1182:
case 2144:
case 1590:
case 3707:
case 1527:
case 2107:
case 1364:
case 3744:
case 3446:
case 2624:
case 2294:
case 1038:
case 283:
case 1013:
case 1571:
case 1894:
case 898:
case 3313:
case 2799:
case 2017:
case 895:
case 3910:
case 1191:
case 3949:
case 2523:
case 3064:
case 2355:
case 3416:
case 2385:
case 2767:
case 3874:
case 149:
case 1288:
case 840:
case 459:
case 105:
case 4059:
case 2736:
case 4089:
case 2888:
case 1958:
case 1258:
case 1519:
case 451:
case 3794:
case 113:
case 3056:
case 2321:
case 3086:
case 1540:
case 2194:
case 1252:
case 1844:
case 2882:
case 2907:
case 1661:
case 2207:
case 141:
case 1807:
case 2852:
case 2656:
case 3496:
case 2600:
case 2244:
case 1282:
case 3439:
case 430:
case 1279:
case 2487:
case 1979:
case 3863:
case 1309:
case 497:
case 2457:
case 3697:
case 3332:
case 3227:
case 4078:
case 2719:
case 1431:
case 3301:
case 353:
case 144:
case 3236:
case 3541:
case 3936:
case 2060:
case 1814:
case 2609:
case 1188:
case 1774:
case 3009:
case 3660:
case 1483:
case 3967:
case 1549:
case 1453:
case 454:
case 2574:
case 1903:
case 1621:
case 1291:
case 1991:
case 2710:
case 3110:
case 2029:
case 815:
case 1270:
case 1300:
case 3588:
case 3299:
case 1141:
case 3629:
case 1677:
case 818:
case 1386:
case 3711:
case 3827:
case 2309:
case 2279:
case 1487:
case 487:
case 1879:
case 3263:
case 3890:
case 2431:
case 1719:
case 3871:
case 3360:
case 1740:
case 653:
case 2519:
case 713:
case 373:
case 1673:
case 1194:
case 523:
case 3422:
case 1686:
case 2844:
case 2661:
case 3329:
case 2807:
case 241:
case 741:
case 2982:
case 2282:
case 1656:
case 1600:
case 1069:
case 1852:
case 3077:
case 3462:
case 1710:
case 2291:
case 2991:
case 2621:
case 2373:
case 2903:
case 2203:
case 1891:
case 1749:
case 402:
case 2270:
case 2970:
case 3741:
case 3415:
case 505:
case 2158:
case 744:
case 1914:
case 1214:
case 3632:
case 3836:
case 1609:
case 460:
case 2814:
case 2476:
case 2188:
case 2483:
case 3867:
case 2510:
case 3693:
case 549:
case 3923:
case 3174:
case 1144:
case 2182:
case 3638:
case 1107:
case 2152:
case 541:
case 1994:
case 3317:
case 1624:
case 2571:
case 2013:
case 183:
case 223:
case 2894:
case 723:
case 635:
case 2685:
case 3468:
case 3819:
case 3055:
case 1790:
case 3779:
case 3163:
case 1727:
case 2179:
case 1811:
case 3544:
case 3085:
case 1047:
case 368:
case 3274:
case 3304:
case 3123:
case 749:
case 963:
case 2723:
case 365:
case 249:
case 2043:
case 1858:
case 2599:
case 3643:
case 205:
case 544:
case 208:
case 2258:
case 708:
case 1664:
case 3770:
case 3514:
case 479:
case 1017:
case 2536:
case 2941:
case 2241:
case 2170:
case 946:
case 3849:
case 2103:
case 1475:
case 3935:
case 3235:
case 2324:
case 3066:
case 2499:
case 3659:
case 2230:
case 554:
case 2815:
case 812:
case 2637:
case 2392:
case 1215:
case 3528:
case 1830:
case 3689:
case 3037:
case 1651:
case 3175:
case 2089:
case 864:
case 2666:
case 759:
case 619:
case 3853:
case 2734:
case 2116:
case 1648:
case 3883:
case 2467:
case 1575:
case 624:
case 3414:
case 956:
case 384:
case 2436:
case 2471:
case 1168:
case 3831:
case 952:
case 2348:
case 2050:
case 861:
case 2006:
case 1245:
case 1945:
case 3287:
case 3987:
case 2239:
case 2490:
case 1839:
case 3680:
case 483:
case 3257:
case 1896:
case 1922:
case 1222:
case 2296:
case 2996:
case 621:
case 2626:
case 2381:
case 3026:
case 4047:
case 377:
case 3568:
case 2146:
case 1633:
case 3595:
case 527:
case 4029:
case 336:
case 174:
case 1776:
case 1698:
case 614:
case 1665:
case 1612:
case 2325:
case 1816:
case 3234:
case 389:
case 967:
case 662:
case 2216:
case 1384:
case 160:
case 1354:
case 3275:
case 2553:
case 20:
case 559:
case 3730:
case 1115:
case 254:
case 36:
case 822:
case 3808:
case 2130:
case 517:
case 2078:
case 2531:
case 2246:
case 2654:
case 227:
case 230:
case 727:
case 797:
case 1587:
case 611:
case 2196:
case 3796:
case 3678:
case 1005:
case 3054:
case 171:
case 2365:
case 2787:
case 3157:
case 2398:
case 751:
case 2757:
case 106:
case 4069:
case 2419:
case 1731:
case 2868:
case 1968:
case 1268:
case 1625:
case 1295:
case 1382:
case 2670:
case 1459:
case 445:
case 1543:
case 2277:
case 1489:
case 2977:
case 2307:
case 448:
case 3091:
case 3003:
case 3451:
case 2921:
case 2221:
case 3481:
case 1821:
case 409:
case 1717:
case 1099:
case 3448:
case 315:
case 278:
case 778:
case 775:
case 3623:
case 1472:
case 4008:
case 1067:
case 3564:
case 2023:
case 1614:
case 2809:
case 3327:
case 3232:
case 3932:
case 941:
case 1379:
case 1209:
case 3143:
case 3524:
case 2155:
case 3367:
case 2185:
case 1090:
case 3079:
case 1704:
case 1450:
case 1406:
case 3897:
case 2314:
case 546:
case 1480:
case 1513:
case 1286:
case 2856:
case 1607:
case 2961:
case 3138:
case 2738:
case 1861:
case 853:
case 2682:
case 1644:
case 2886:
case 1900:
case 1256:
case 1200:
case 2873:
case 3418:
case 1391:
case 1303:
case 3869:
case 1973:
case 1124:
case 2504:
case 410:
case 3132:
case 3465:
case 2074:
case 1311:
case 1760:
case 398:
case 3674:
case 685:
case 3058:
case 3412:
case 3193:
case 923:
case 2793:
case 575:
case 688:
case 742:
case 325:
case 395:
case 3319:
case 3041:
case 340:
case 3817:
case 133:
case 3721:
case 45:
case 2121:
case 2394:
case 1264:
case 1964:
case 14:
case 1049:
case 404:
case 1532:
case 2035:
case 1729:
case 2641:
case 3509:
case 2864:
case 1010:
case 4076:
case 1694:
case 1173:
case 476:
case 1769:
case 3349:
case 3310:
case 763:
case 2824:
case 3442:
case 303:
case 1100:
case 905:
case 3761:
case 908:
case 3213:
case 3913:
case 838:
case 4002:
case 1478:
case 3586:
case 1720:
case 1040:
case 1019:
case 3556:
case 3500:
case 246:
case 847:
case 1388:
case 3804:
case 1855:
case 2569:
case 2985:
case 2255:
case 1885:
case 2420:
case 2639:
case 3950:
case 3376:
case 334:
case 2497:
case 1031:
case 4:
case 3353:
case 2057:
case 2087:
case 3383:
case 821:
case 3096:
case 2469:
case 1705:
case 3754:
case 101:
case 2184:
case 1142:
case 4040:
case 2154:
case 3784:
case 1933:
case 1233:
case 3473:
case 3525:
case 1918:
case 1992:
case 3178:
case 2315:
case 1622:
case 256:
case 3400:
case 2778:
case 2926:
case 2226:
case 857:
case 661:
case 1330:
case 2881:
case 670:
case 1251:
case 1951:
case 894:
case 824:
case 2266:
case 110:
case 3030:
case 252:
case 2851:
case 3959:
case 3259:
case 331:
case 77:
case 2429:
case 819:
case 1396:
case 31:
case 2322:
case 1615:
case 3289:
case 3989:
case 1165:
case 1432:
case 1053:
case 3972:
case 433:
case 1083:
case 3409:
case 1248:
case 2460:
case 917:
case 1401:
case 4049:
case 1493:
case 104:
case 1506:
case 4090:
case 3308:
case 3978:
case 1192:
case 3726:
case 556:
case 1118:
case 4071:
case 3424:
case 2646:
case 2842:
case 1884:
case 1942:
case 1242:
case 1854:
case 866:
case 3805:
case 811:
case 1668:
case 1225:
case 2328:
case 2750:
case 3592:
case 2780:
case 3106:
case 843:
case 696:
case 1212:
case 382:
case 148:
case 2368:
case 1148:
case 930:
case 997:
case 927:
case 145:
case 2616:
case 800:
case 692:
case 2812:
case 1443:
case 455:
case 2865:
case 1559:
case 2898:
case 3172:
case 1998:
case 2034:
case 458:
case 1589:
case 3189:
case 57:
case 1572:
case 2137:
case 3737:
case 862:
case 68:
case 190:
case 137:
case 2166:
case 1346:
case 1008:
case 780:
case 4067:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755453602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,];
var gg_b = "1755453602/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
