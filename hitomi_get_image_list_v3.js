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
var o = 0;
switch (g) {
case 3881:
case 2039:
case 1853:
case 1450:
case 1474:
case 3649:
case 2106:
case 3033:
case 3884:
case 2643:
case 3709:
case 1471:
case 2917:
case 450:
case 3463:
case 3930:
case 1185:
case 3702:
case 317:
case 2032:
case 1769:
case 2469:
case 2516:
case 3296:
case 3345:
case 2334:
case 1200:
case 3642:
case 659:
case 882:
case 3824:
case 3452:
case 407:
case 3760:
case 1636:
case 1939:
case 2203:
case 3821:
case 1700:
case 2874:
case 1932:
case 1862:
case 3781:
case 1156:
case 2453:
case 1753:
case 3809:
case 1128:
case 878:
case 1125:
case 1017:
case 905:
case 853:
case 3534:
case 301:
case 2548:
case 3459:
case 3224:
case 759:
case 682:
case 2214:
case 230:
case 3594:
case 3978:
case 3975:
case 778:
case 1249:
case 2326:
case 3133:
case 2211:
case 1660:
case 1992:
case 401:
case 2568:
case 2565:
case 1999:
case 2811:
case 2659:
case 1077:
case 307:
case 3740:
case 1088:
case 678:
case 2132:
case 653:
case 1242:
case 3840:
case 3443:
case 3236:
case 417:
case 3526:
case 2449:
case 192:
case 963:
case 566:
case 3662:
case 2714:
case 3927:
case 208:
case 1906:
case 788:
case 135:
case 3093:
case 1742:
case 2576:
case 156:
case 3357:
case 628:
case 1056:
case 672:
case 3966:
case 3240:
case 1624:
case 2663:
case 451:
case 2:
case 3091:
case 1375:
case 2907:
case 36:
case 1387:
case 2664:
case 114:
case 539:
case 703:
case 4031:
case 3392:
case 252:
case 3698:
case 3695:
case 223:
case 3147:
case 89:
case 1976:
case 603:
case 1810:
case 1588:
case 2435:
case 2438:
case 1735:
case 3719:
case 2393:
case 1577:
case 3654:
case 273:
case 1710:
case 2813:
case 258:
case 3055:
case 3058:
case 3306:
case 1683:
case 1007:
case 3651:
case 521:
case 619:
case 2592:
case 300:
case 719:
case 991:
case 1957:
case 2145:
case 2697:
case 3134:
case 813:
case 1238:
case 1235:
case 2599:
case 2213:
case 3131:
case 106:
case 3908:
case 3067:
case 3593:
case 1366:
case 2076:
case 2168:
case 2801:
case 3879:
case 3223:
case 2451:
case 665:
case 3533:
case 713:
case 2873:
case 1770:
case 3194:
case 104:
case 2454:
case 3047:
case 1346:
case 1489:
case 2229:
case 2822:
case 2539:
case 3610:
case 231:
case 2829:
case 1895:
case 4058:
case 4055:
case 149:
case 4026:
case 765:
case 432:
case 587:
case 3497:
case 2289:
case 2498:
case 1254:
case 2729:
case 1270:
case 3155:
case 2333:
case 3126:
case 79:
case 17:
case 1251:
case 1612:
case 24:
case 457:
case 3283:
case 3723:
case 1315:
case 3772:
case 609:
case 3339:
case 3034:
case 3480:
case 351:
case 3883:
case 1851:
case 709:
case 4091:
case 936:
case 3332:
case 1401:
case 46:
case 2701:
case 3638:
case 1517:
case 2644:
case 1854:
case 1422:
case 3031:
case 644:
case 1404:
case 584:
case 2027:
case 994:
case 3249:
case 398:
case 2118:
case 2115:
case 1594:
case 2307:
case 2436:
case 1736:
case 3660:
case 4017:
case 1133:
case 94:
case 599:
case 83:
case 2066:
case 1376:
case 3999:
case 50:
case 1740:
case 3088:
case 2843:
case 107:
case 2440:
case 868:
case 236:
case 524:
case 3242:
case 1600:
case 2146:
case 647:
case 150:
case 1443:
case 3411:
case 841:
case 1555:
case 3906:
case 2650:
case 2078:
case 2075:
case 1365:
case 3414:
case 1662:
case 1567:
case 335:
case 1669:
case 574:
case 1240:
case 3602:
case 862:
case 3305:
case 3117:
case 111:
case 747:
case 979:
case 3624:
case 2130:
case 847:
case 3853:
case 3762:
case 435:
case 1547:
case 2614:
case 1896:
case 762:
case 4056:
case 973:
case 3800:
case 1649:
case 958:
case 2252:
case 1033:
case 2611:
case 641:
case 1260:
case 1709:
case 2409:
case 2259:
case 2852:
case 3185:
case 1930:
case 51:
case 1721:
case 1281:
case 3253:
case 3200:
case 1642:
case 1345:
case 1209:
case 4077:
case 2046:
case 1760:
case 3636:
case 2863:
case 9:
case 2752:
case 2187:
case 526:
case 923:
case 3939:
case 3262:
case 1821:
case 2178:
case 2175:
case 1918:
case 2496:
case 3700:
case 1531:
case 2481:
case 1781:
case 996:
case 3156:
case 593:
case 3017:
case 1316:
case 3125:
case 3128:
case 1809:
case 1459:
case 101:
case 1879:
case 1191:
case 3751:
case 2264:
case 32:
case 2483:
case 2880:
case 2515:
case 3770:
case 908:
case 3346:
case 3489:
case 3754:
case 3295:
case 3298:
case 3330:
case 548:
case 2861:
case 2108:
case 2317:
case 3898:
case 3948:
case 2934:
case 1279:
case 4007:
case 2280:
case 2797:
case 1823:
case 2720:
case 2864:
case 38:
case 3795:
case 1158:
case 1155:
case 825:
case 3270:
case 930:
case 1723:
case 3315:
case 1126:
case 37:
case 1339:
case 2546:
case 1772:
case 2530:
case 2780:
case 1480:
case 1034:
case 2220:
case 3517:
case 1779:
case 2479:
case 3401:
case 2613:
case 3422:
case 840:
case 414:
case 3854:
case 885:
case 1167:
case 3916:
case 3375:
case 3378:
case 138:
case 16:
case 740:
case 1712:
case 2590:
case 2527:
case 314:
case 2237:
case 1094:
case 2629:
case 3210:
case 2958:
case 1392:
case 2741:
case 3810:
case 2328:
case 2325:
case 2622:
case 2008:
case 2967:
case 3738:
case 3679:
case 2744:
case 3585:
case 157:
case 2601:
case 725:
case 640:
case 1719:
case 2566:
case 2419:
case 685:
case 205:
case 2575:
case 3710:
case 2994:
case 2689:
case 1654:
case 1437:
case 1058:
case 1055:
case 912:
case 1026:
case 1819:
case 1212:
case 1651:
case 3007:
case 1306:
case 2844:
case 2986:
case 3838:
case 48:
case 1134:
case 3957:
case 42:
case 3528:
case 3235:
case 269:
case 1131:
case 2388:
case 1905:
case 1067:
case 1908:
case 1593:
case 1303:
case 30:
case 1374:
case 615:
case 2665:
case 3095:
case 3098:
case 2061:
case 972:
case 763:
case 324:
case 2431:
case 663:
case 598:
case 1731:
case 1847:
case 1581:
case 384:
case 1596:
case 988:
case 486:
case 3500:
case 399:
case 2559:
case 2434:
case 2080:
case 3445:
case 1079:
case 2369:
case 715:
case 1997:
case 3070:
case 805:
case 922:
case 1961:
case 476:
case 1831:
case 3054:
case 2447:
case 360:
case 1964:
case 3626:
case 2972:
case 1834:
case 1607:
case 41:
case 2144:
case 2563:
case 2020:
case 1234:
case 1524:
case 2300:
case 1119:
case 2141:
case 4010:
case 890:
case 2676:
case 3922:
case 3416:
case 3904:
case 605:
case 2164:
case 1726:
case 2426:
case 285:
case 1123:
case 240:
case 1172:
case 1291:
case 2808:
case 2805:
case 3195:
case 1755:
case 164:
case 2037:
case 1294:
case 3549:
case 4070:
case 2208:
case 1941:
case 2205:
case 554:
case 3476:
case 1767:
case 3913:
case 225:
case 1886:
case 1179:
case 1311:
case 815:
case 1255:
case 1794:
case 3154:
case 1791:
case 1183:
case 1226:
case 2486:
case 1786:
case 1012:
case 3038:
case 3457:
case 863:
case 1540:
case 1019:
case 1826:
case 769:
case 3634:
case 145:
case 2120:
case 2648:
case 3807:
case 1858:
case 1855:
case 2041:
case 3631:
case 1405:
case 1408:
case 2705:
case 2708:
case 2227:
case 2787:
case 2639:
case 1475:
case 3510:
case 2778:
case 58:
case 2936:
case 3888:
case 3492:
case 2152:
case 549:
case 3877:
case 1160:
case 3285:
case 3499:
case 1313:
case 755:
case 52:
case 2940:
case 3277:
case 1184:
case 3341:
case 2266:
case 3100:
case 2493:
case 3042:
case 1793:
case 4062:
case 834:
case 1181:
case 3756:
case 3344:
case 2338:
case 2632:
case 3153:
case 504:
case 3337:
case 1943:
case 697:
case 467:
case 3825:
case 3911:
case 133:
case 3162:
case 4000:
case 891:
case 1893:
case 1427:
case 4053:
case 2287:
case 516:
case 913:
case 2875:
case 3169:
case 2541:
case 1466:
case 1124:
case 2163:
case 3535:
case 1617:
case 1040:
case 247:
case 797:
case 177:
case 2351:
case 2218:
case 2606:
case 3974:
case 2143:
case 1389:
case 1446:
case 691:
case 1572:
case 2909:
case 2370:
case 35:
case 2052:
case 1579:
case 2924:
case 3717:
case 2730:
case 919:
case 171:
case 791:
case 2818:
case 3320:
case 3397:
case 1096:
case 442:
case 514:
case 3053:
case 1081:
case 2830:
case 181:
case 1952:
case 2395:
case 1009:
case 734:
case 3439:
case 4042:
case 268:
case 3554:
case 903:
case 506:
case 23:
case 1021:
case 946:
case 448:
case 543:
case 2981:
case 121:
case 2063:
case 1304:
case 1024:
case 2230:
case 1625:
case 2699:
case 1140:
case 1959:
case 3123:
case 517:
case 3286:
case 7:
case 2511:
case 11:
case 2265:
case 2268:
case 370:
case 1647:
case 93:
case 1549:
case 696:
case 466:
case 723:
case 752:
case 364:
case 246:
case 623:
case 2340:
case 176:
case 3941:
case 652:
case 2122:
case 3894:
case 1913:
case 783:
case 1476:
case 84:
case 2257:
case 6:
case 2865:
case 2868:
case 2101:
case 894:
case 3891:
case 3255:
case 3311:
case 186:
case 1343:
case 637:
case 2189:
case 1465:
case 2768:
case 1151:
case 3012:
case 3226:
case 4079:
case 831:
case 3183:
case 4023:
case 941:
case 219:
case 1457:
case 1038:
case 380:
case 1035:
case 1807:
case 1634:
case 345:
case 4072:
case 3019:
case 737:
case 2182:
case 3408:
case 3405:
case 126:
case 3374:
case 10:
case 1686:
case 480:
case 3023:
case 445:
case 1691:
case 837:
case 2309:
case 2970:
case 3371:
case 2029:
case 1098:
case 1095:
case 124:
case 631:
case 3581:
case 2605:
case 2608:
case 2302:
case 1500:
case 1982:
case 3596:
case 1363:
case 2073:
case 3734:
case 420:
case 265:
case 779:
case 3920:
case 858:
case 4012:
case 3961:
case 2574:
case 2503:
case 1352:
case 2998:
case 244:
case 2360:
case 2089:
case 1054:
case 629:
case 3509:
case 883:
case 3964:
case 29:
case 2571:
case 74:
case 2848:
case 896:
case 789:
case 1051:
case 209:
case 852:
case 3980:
case 729:
case 550:
case 2248:
case 1667:
case 3231:
case 366:
case 694:
case 1569:
case 1416:
case 464:
case 3521:
case 2716:
case 1950:
case 2383:
case 712:
case 2627:
case 1149:
case 2832:
case 1595:
case 1598:
case 3572:
case 3389:
case 3446:
case 3233:
case 2111:
case 15:
case 477:
case 557:
case 3688:
case 3685:
case 808:
case 2417:
case 3382:
case 4036:
case 975:
case 1717:
case 433:
case 538:
case 3084:
case 1142:
case 2969:
case 1000:
case 3096:
case 1397:
case 2573:
case 612:
case 3081:
case 3136:
case 427:
case 1551:
case 3009:
case 985:
case 3329:
case 2372:
case 1062:
case 2050:
case 2675:
case 2003:
case 2687:
case 3418:
case 3301:
case 3656:
case 2379:
case 2582:
case 1693:
case 3024:
case 321:
case 3373:
case 3959:
case 925:
case 259:
case 1217:
case 3628:
case 3625:
case 1049:
case 3487:
case 2615:
case 2206:
case 2014:
case 1510:
case 222:
case 3478:
case 3475:
case 1885:
case 4024:
case 2792:
case 421:
case 481:
case 818:
case 1728:
case 1288:
case 1285:
case 1499:
case 4009:
case 3184:
case 1277:
case 1341:
case 2806:
case 3793:
case 2319:
case 1100:
case 1042:
case 630:
case 2456:
case 602:
case 1337:
case 2171:
case 2646:
case 4084:
case 2899:
case 1828:
case 1825:
case 551:
case 2150:
case 142:
case 1856:
case 4081:
case 2103:
case 3490:
case 1169:
case 288:
case 2513:
case 510:
case 2630:
case 1777:
case 2488:
case 377:
case 2299:
case 1225:
case 812:
case 3102:
case 1788:
case 4060:
case 3617:
case 1538:
case 1393:
case 2577:
case 874:
case 305:
case 1680:
case 1057:
case 2738:
case 3356:
case 2679:
case 3744:
case 1435:
case 3601:
case 3328:
case 2810:
case 3325:
case 1713:
case 2413:
case 860:
case 2976:
case 1116:
case 3837:
case 196:
case 776:
case 3604:
case 3673:
case 1661:
case 3629:
case 676:
case 3955:
case 3958:
case 3590:
case 214:
case 2387:
case 1664:
case 390:
case 1068:
case 1065:
case 541:
case 2672:
case 3926:
case 71:
case 1:
case 1076:
case 568:
case 463:
case 2556:
case 686:
case 1213:
case 2528:
case 2525:
case 2238:
case 369:
case 824:
case 1697:
case 1148:
case 1145:
case 2835:
case 3986:
case 2838:
case 2327:
case 3991:
case 884:
case 786:
case 3841:
case 899:
case 3587:
case 3575:
case 2710:
case 3578:
case 1813:
case 315:
case 3280:
case 3797:
case 893:
case 3864:
case 28:
case 1201:
case 2945:
case 3934:
case 886:
case 799:
case 179:
case 1157:
case 249:
case 3861:
case 3108:
case 1532:
case 784:
case 2330:
case 624:
case 1273:
case 131:
case 3931:
case 1539:
case 2346:
case 1822:
case 2298:
case 363:
case 1454:
case 1873:
case 3515:
case 2770:
case 684:
case 469:
case 699:
case 70:
case 1168:
case 1801:
case 1165:
case 1773:
case 2870:
case 2404:
case 81:
case 1641:
case 674:
case 2422:
case 2854:
case 1722:
case 2517:
case 660:
case 2401:
case 3530:
case 3780:
case 1048:
case 1045:
case 2315:
case 2318:
case 3423:
case 760:
case 4008:
case 2795:
case 1882:
case 194:
case 4075:
case 2200:
case 1469:
case 4087:
case 2253:
case 1331:
case 391:
case 2188:
case 65:
case 767:
case 3259:
case 3852:
case 3166:
case 497:
case 75:
case 2471:
case 525:
case 1643:
case 3409:
case 3859:
case 932:
case 3252:
case 254:
case 3018:
case 1106:
case 3015:
case 2800:
case 1703:
case 1774:
case 3127:
case 2853:
case 2762:
case 3614:
case 3484:
case 3030:
case 1545:
case 2017:
case 2125:
case 2128:
case 2640:
case 2753:
case 4027:
case 3481:
case 2269:
case 2862:
case 3496:
case 1874:
case 1803:
case 2262:
case 1274:
case 3187:
case 3460:
case 938:
case 3752:
case 96:
case 1347:
case 1271:
case 3933:
case 3046:
case 2696:
case 1956:
case 2681:
case 1814:
case 3993:
case 3508:
case 1557:
case 951:
case 2085:
case 2088:
case 1367:
case 2077:
case 3066:
case 1659:
case 2999:
case 1925:
case 1568:
case 4030:
case 3243:
case 1358:
case 2660:
case 1652:
case 3090:
case 2842:
case 1326:
case 3115:
case 1006:
case 748:
case 1214:
case 130:
case 1139:
case 102:
case 1988:
case 1985:
case 761:
case 2028:
case 2308:
case 2117:
case 4015:
case 4018:
case 2621:
case 2742:
case 1576:
case 1442:
case 85:
case 235:
case 3650:
case 867:
case 3075:
case 1714:
case 2414:
case 742:
case 292:
case 3674:
case 2749:
case 1711:
case 1394:
case 3146:
case 3671:
case 1092:
case 3743:
case 1864:
case 2823:
case 1797:
case 1280:
case 2497:
case 115:
case 2420:
case 3157:
case 2279:
case 1934:
case 3201:
case 1317:
case 820:
case 3222:
case 935:
case 3016:
case 3782:
case 578:
case 3273:
case 522:
case 553:
case 3454:
case 2047:
case 1261:
case 3229:
case 3539:
case 4076:
case 437:
case 3873:
case 1518:
case 1515:
case 582:
case 3165:
case 3168:
case 2272:
case 452:
case 528:
case 3773:
case 572:
case 870:
case 3722:
case 3282:
case 1613:
case 2031:
case 3701:
case 2638:
case 1479:
case 2034:
case 251:
case 1780:
case 3045:
case 2883:
case 4068:
case 4065:
case 1530:
case 2772:
case 210:
case 2339:
case 1764:
case 34:
case 1423:
case 2283:
case 1897:
case 2723:
case 483:
case 588:
case 2158:
case 1947:
case 3289:
case 3498:
case 496:
case 666:
case 3680:
case 489:
case 1419:
case 3393:
case 257:
case 44:
case 670:
case 1744:
case 1356:
case 3435:
case 3438:
case 2444:
case 3116:
case 1008:
case 1325:
case 3713:
case 1741:
case 494:
case 664:
case 1673:
case 1604:
case 1958:
case 2392:
case 352:
case 764:
case 1955:
case 3661:
case 1237:
case 3506:
case 190:
case 2086:
case 3664:
case 4048:
case 4045:
case 866:
case 3907:
case 3068:
case 2908:
case 2905:
case 1377:
case 2593:
case 1385:
case 337:
case 2131:
case 1244:
case 745:
case 620:
case 780:
case 3145:
case 2134:
case 3697:
case 232:
case 1986:
case 200:
case 479:
case 2306:
case 1991:
case 559:
case 645:
case 2651:
case 1841:
case 2670:
case 431:
case 2654:
case 1578:
case 3813:
case 358:
case 916:
case 418:
case 513:
case 3956:
case 881:
case 3814:
case 3132:
case 207:
case 136:
case 2740:
case 3557:
case 727:
case 3928:
case 1066:
case 3811:
case 3367:
case 627:
case 1243:
case 97:
case 3568:
case 2586:
case 1307:
case 1118:
case 3326:
case 330:
case 777:
case 197:
case 3985:
case 3663:
case 949:
case 98:
case 633:
case 2669:
case 412:
case 3442:
case 4039:
case 2662:
case 2990:
case 1075:
case 2368:
case 3391:
case 1603:
case 1674:
case 4032:
case 3449:
case 3386:
case 871:
case 3394:
case 3711:
case 2526:
case 2840:
case 2443:
case 92:
case 250:
case 839:
case 677:
case 1146:
case 2348:
case 2345:
case 408:
case 906:
case 739:
case 3032:
case 833:
case 1421:
case 3469:
case 3516:
case 2721:
case 2930:
case 2702:
case 771:
case 3917:
case 1763:
case 2463:
case 1409:
case 3643:
case 3771:
case 2260:
case 1252:
case 1859:
case 2033:
case 2884:
case 1127:
case 3774:
case 3703:
case 2649:
case 3106:
case 2896:
case 546:
case 1614:
case 2881:
case 3750:
case 312:
case 639:
case 3545:
case 2459:
case 1759:
case 1484:
case 2224:
case 3199:
case 2316:
case 3871:
case 2781:
case 2221:
case 2531:
case 3453:
case 3850:
case 3874:
case 3400:
case 402:
case 318:
case 827:
case 1175:
case 1178:
case 914:
case 1187:
case 519:
case 1460:
case 134:
case 1046:
case 3347:
case 3192:
case 2802:
case 1632:
case 4003:
case 1335:
case 3456:
case 2181:
case 2196:
case 2793:
case 1159:
case 1266:
case 2184:
case 1940:
case 2313:
case 227:
case 3425:
case 3792:
case 287:
case 353:
case 3014:
case 1778:
case 378:
case 1227:
case 2487:
case 1537:
case 3615:
case 277:
case 3892:
case 650:
case 147:
case 3477:
case 2124:
case 2519:
case 589:
case 2466:
case 1887:
case 2121:
case 984:
case 3942:
case 1287:
case 3103:
case 2490:
case 3174:
case 1275:
case 372:
case 817:
case 3949:
case 3646:
case 1310:
case 3292:
case 750:
case 611:
case 2512:
case 2943:
case 850:
case 3232:
case 523:
case 472:
case 2084:
case 5:
case 2677:
case 2430:
case 2963:
case 3501:
case 2579:
case 1052:
case 1564:
case 1909:
case 2060:
case 1746:
case 2389:
case 1143:
case 596:
case 3239:
case 162:
case 3114:
case 1561:
case 3529:
case 1215:
case 1218:
case 3383:
case 811:
case 3690:
case 1351:
case 986:
case 488:
case 583:
case 2959:
case 1846:
case 701:
case 1230:
case 1520:
case 2304:
case 1597:
case 4014:
case 3953:
case 976:
case 422:
case 3732:
case 3582:
case 3687:
case 1718:
case 1715:
case 2418:
case 2415:
case 3372:
case 3739:
case 91:
case 1960:
case 1395:
case 1398:
case 2583:
case 2136:
case 281:
case 2733:
case 1433:
case 601:
case 1657:
case 961:
case 2079:
case 1369:
case 2734:
case 2596:
case 502:
case 3073:
case 3004:
case 800:
case 2581:
case 3608:
case 2731:
case 3954:
case 895:
case 2371:
case 313:
case 2247:
case 2072:
case 3951:
case 1668:
case 2350:
case 2303:
case 1552:
case 419:
case 2560:
case 2521:
case 3082:
case 403:
case 1676:
case 2524:
case 1979:
case 1300:
case 1563:
case 1097:
case 2234:
case 3248:
case 309:
case 751:
case 1353:
case 2502:
case 610:
case 3845:
case 3848:
case 2834:
case 1972:
case 710:
case 2509:
case 39:
case 2747:
case 857:
case 948:
case 3503:
case 344:
case 1919:
case 638:
case 3101:
case 2891:
case 2944:
case 3938:
case 1180:
case 66:
case 49:
case 4089:
case 2894:
case 2767:
case 3776:
case 346:
case 3340:
case 1616:
case 1208:
case 444:
case 3122:
case 851:
case 2758:
case 1037:
case 264:
case 1455:
case 3336:
case 1161:
case 3514:
case 1543:
case 3265:
case 1912:
case 3857:
case 140:
case 657:
case 409:
case 1426:
case 2726:
case 3511:
case 1708:
case 3182:
case 3013:
case 1041:
case 3276:
case 2858:
case 175:
case 245:
case 1197:
case 1120:
case 1342:
case 2019:
case 700:
case 2536:
case 732:
case 2314:
case 695:
case 3765:
case 4073:
case 3189:
case 3910:
case 2255:
case 2258:
case 2794:
case 2053:
case 3921:
case 2142:
case 1969:
case 2000:
case 3059:
case 341:
case 3580:
case 3902:
case 980:
case 2717:
case 267:
case 3909:
case 3370:
case 835:
case 920:
case 2971:
case 447:
case 3052:
case 3143:
case 3354:
case 2598:
case 2595:
case 2903:
case 2974:
case 1114:
case 754:
case 1239:
case 1627:
case 3351:
case 3218:
case 2950:
case 3699:
case 159:
case 3984:
case 898:
case 3520:
case 3063:
case 3597:
case 3230:
case 2693:
case 1953:
case 2380:
case 1900:
case 2432:
case 1323:
case 1074:
case 33:
case 1003:
case 1687:
case 2364:
case 1678:
case 1675:
case 368:
case 1372:
case 2062:
case 2554:
case 1071:
case 2361:
case 3692:
case 970:
case 2344:
case 1456:
case 3632:
case 43:
case 966:
case 2042:
case 1319:
case 3890:
case 1806:
case 2277:
case 3159:
case 2285:
case 1425:
case 2725:
case 3152:
case 2633:
case 2877:
case 3936:
case 3043:
case 2492:
case 178:
case 3639:
case 3775:
case 1014:
case 1615:
case 3227:
case 3290:
case 2049:
case 3787:
case 2538:
case 3544:
case 2788:
case 1485:
case 2225:
case 1892:
case 2228:
case 2777:
case 1477:
case 854:
case 261:
case 3887:
case 3541:
case 735:
case 1942:
case 3727:
case 2914:
case 635:
case 1174:
case 3287:
case 2406:
case 656:
case 1150:
case 242:
case 792:
case 3278:
case 3275:
case 1899:
case 3310:
case 1171:
case 2337:
case 1101:
case 3919:
case 921:
case 1935:
case 1776:
case 3467:
case 87:
case 2476:
case 1104:
case 1173:
case 1122:
case 3208:
case 3205:
case 3458:
case 3037:
case 714:
case 3161:
case 3808:
case 2647:
case 340:
case 21:
case 3426:
case 591:
case 2707:
case 1407:
case 643:
case 226:
case 1013:
case 1182:
case 3705:
case 3708:
case 706:
case 4061:
case 1276:
case 82:
case 3041:
case 3342:
case 804:
case 2634:
case 3197:
case 375:
case 2035:
case 2038:
case 1757:
case 2457:
case 2207:
case 3349:
case 3486:
case 1765:
case 1768:
case 3491:
case 2465:
case 2468:
case 4080:
case 849:
case 2154:
case 2343:
case 286:
case 1910:
case 78:
case 843:
case 3657:
case 1001:
case 1745:
case 1748:
case 62:
case 3080:
case 2445:
case 2448:
case 1073:
case 284:
case 2982:
case 604:
case 1324:
case 1608:
case 1605:
case 1216:
case 2989:
case 224:
case 3061:
case 113:
case 2110:
case 4041:
case 806:
case 2691:
case 555:
case 3668:
case 3983:
case 475:
case 933:
case 4044:
case 536:
case 2686:
case 3552:
case 3064:
case 4037:
case 2416:
case 1113:
case 3141:
case 2667:
case 1384:
case 2922:
case 1245:
case 3020:
case 440:
case 3979:
case 927:
case 3144:
case 109:
case 1381:
case 485:
case 2051:
case 3972:
case 2626:
case 1571:
case 425:
case 3923:
case 597:
case 1550:
case 616:
case 2562:
case 3447:
case 274:
case 2658:
case 144:
case 1574:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754042401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,];
var gg_b = "1754042401/";

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
