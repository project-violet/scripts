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
case 2809:
case 1420:
case 3892:
case 402:
case 767:
case 2264:
case 1934:
case 3794:
case 3140:
case 1320:
case 2701:
case 2713:
case 196:
case 3602:
case 639:
case 1876:
case 1937:
case 144:
case 2069:
case 3539:
case 803:
case 649:
case 1399:
case 2786:
case 3906:
case 312:
case 3797:
case 2295:
case 2256:
case 1904:
case 2671:
case 1145:
case 560:
case 3325:
case 43:
case 3632:
case 3242:
case 668:
case 220:
case 425:
case 78:
case 589:
case 770:
case 1540:
case 2845:
case 1139:
case 2389:
case 3443:
case 3148:
case 841:
case 1285:
case 1371:
case 3343:
case 1760:
case 3936:
case 1428:
case 800:
case 1471:
case 1929:
case 3619:
case 1291:
case 1446:
case 3527:
case 615:
case 2942:
case 390:
case 4069:
case 2263:
case 995:
case 2040:
case 1159:
case 728:
case 3126:
case 3169:
case 2462:
case 1990:
case 3670:
case 2573:
case 217:
case 1092:
case 2751:
case 2717:
case 3215:
case 3652:
case 2362:
case 9:
case 202:
case 3730:
case 2646:
case 3347:
case 3738:
case 897:
case 805:
case 2475:
case 1526:
case 3447:
case 16:
case 3621:
case 1957:
case 1911:
case 1998:
case 2722:
case 24:
case 1735:
case 2048:
case 225:
case 420:
case 3344:
case 1954:
case 2206:
case 1074:
case 3700:
case 3995:
case 2082:
case 2141:
case 1300:
case 1010:
case 3435:
case 1842:
case 2833:
case 794:
case 1274:
case 2282:
case 2778:
case 3622:
case 1595:
case 2416:
case 400:
case 1888:
case 1744:
case 1190:
case 1079:
case 2600:
case 349:
case 1438:
case 915:
case 2142:
case 153:
case 3598:
case 2383:
case 612:
case 3557:
case 2866:
case 2890:
case 1338:
case 695:
case 1747:
case 486:
case 84:
case 2483:
case 3156:
case 3885:
case 992:
case 1129:
case 368:
case 222:
case 772:
case 1154:
case 2803:
case 878:
case 2898:
case 1330:
case 3566:
case 2036:
case 2811:
case 2180:
case 3614:
case 956:
case 403:
case 1292:
case 3167:
case 3305:
case 2585:
case 1157:
case 2361:
case 1880:
case 150:
case 1103:
case 2630:
case 1408:
case 1493:
case 4067:
case 974:
case 4095:
case 817:
case 1556:
case 3164:
case 1308:
case 3617:
case 1393:
case 2732:
case 161:
case 3496:
case 3241:
case 690:
case 286:
case 939:
case 910:
case 1909:
case 3771:
case 2834:
case 1273:
case 949:
case 3507:
case 3460:
case 598:
case 1450:
case 116:
case 1563:
case 1472:
case 241:
case 2976:
case 1687:
case 1372:
case 2518:
case 1725:
case 1465:
case 3136:
case 2510:
case 823:
case 693:
case 3982:
case 3613:
case 1923:
case 374:
case 3537:
case 1107:
case 1153:
case 155:
case 2804:
case 1458:
case 1939:
case 3818:
case 1497:
case 2269:
case 3686:
case 2697:
case 356:
case 2658:
case 3355:
case 4036:
case 504:
case 2064:
case 2853:
case 1104:
case 1815:
case 968:
case 2956:
case 412:
case 1370:
case 2527:
case 2708:
case 1761:
case 3263:
case 3942:
case 290:
case 495:
case 686:
case 2126:
case 407:
case 641:
case 1207:
case 1541:
case 600:
case 631:
case 1419:
case 1826:
case 3646:
case 3824:
case 1045:
case 3475:
case 1644:
case 581:
case 2559:
case 3375:
case 1783:
case 2678:
case 3281:
case 293:
case 126:
case 2621:
case 2967:
case 3048:
case 1173:
case 325:
case 157:
case 1039:
case 920:
case 1478:
case 2344:
case 546:
case 3980:
case 2700:
case 3206:
case 33:
case 810:
case 1321:
case 2444:
case 3082:
case 3809:
case 2545:
case 827:
case 3176:
case 2892:
case 2:
case 3264:
case 182:
case 3026:
case 2794:
case 364:
case 3713:
case 3577:
case 2602:
case 1298:
case 3701:
case 2981:
case 2765:
case 3267:
case 978:
case 490:
case 2539:
case 1402:
case 3574:
case 2906:
case 704:
case 856:
case 3295:
case 4076:
case 212:
case 559:
case 2797:
case 1012:
case 1302:
case 2750:
case 1848:
case 1576:
case 1229:
case 815:
case 2772:
case 1027:
case 1991:
case 3671:
case 2242:
case 3731:
case 320:
case 1177:
case 622:
case 1643:
case 2632:
case 2425:
case 1882:
case 892:
case 3823:
case 1024:
case 2443:
case 493:
case 1290:
case 2509:
case 1787:
case 2182:
case 2343:
case 1332:
case 2041:
case 3489:
case 1174:
case 292:
case 3732:
case 2241:
case 2496:
case 2106:
case 3487:
case 1066:
case 1110:
case 760:
case 439:
case 1789:
case 3650:
case 1224:
case 1090:
case 2507:
case 1515:
case 58:
case 3834:
case 449:
case 215:
case 300:
case 331:
case 3484:
case 1033:
case 2810:
case 2181:
case 602:
case 1179:
case 997:
case 905:
case 3976:
case 2504:
case 3384:
case 1431:
case 3518:
case 2088:
case 1863:
case 3694:
case 274:
case 567:
case 1212:
case 2601:
case 1655:
case 3804:
case 227:
case 8:
case 2537:
case 2948:
case 3067:
case 1668:
case 413:
case 777:
case 1259:
case 812:
case 3226:
case 1011:
case 1301:
case 3697:
case 1977:
case 1098:
case 256:
case 1313:
case 64:
case 2368:
case 1191:
case 3807:
case 3853:
case 3064:
case 922:
case 3833:
case 180:
case 893:
case 2554:
case 1580:
case 3006:
case 623:
case 3282:
case 305:
case 3248:
case 1185:
case 3638:
case 3829:
case 3416:
case 1239:
case 4042:
case 1649:
case 249:
case 2926:
case 2557:
case 2511:
case 2449:
case 2598:
case 1322:
case 2503:
case 3188:
case 986:
case 1635:
case 3890:
case 1422:
case 765:
case 322:
case 2195:
case 268:
case 620:
case 1417:
case 3857:
case 3180:
case 3811:
case 3803:
case 890:
case 456:
case 3719:
case 903:
case 1209:
case 1317:
case 1351:
case 3693:
case 2305:
case 138:
case 3854:
case 213:
case 2533:
case 1414:
case 751:
case 3240:
case 3630:
case 427:
case 148:
case 2164:
case 1314:
case 1605:
case 1022:
case 2777:
case 211:
case 3083:
case 136:
case 2501:
case 753:
case 3610:
case 3594:
case 2184:
case 1334:
case 146:
case 3481:
case 3745:
case 1172:
case 1278:
case 3558:
case 940:
case 3597:
case 1782:
case 3723:
case 194:
case 266:
case 1437:
case 3160:
case 2774:
case 2586:
case 345:
case 3679:
case 3739:
case 2244:
case 901:
case 2872:
case 3196:
case 1337:
case 1748:
case 2035:
case 1884:
case 335:
case 526:
case 699:
case 1194:
case 1740:
case 2858:
case 3155:
case 108:
case 1404:
case 2607:
case 1252:
case 988:
case 3925:
case 1615:
case 2865:
case 1014:
case 4068:
case 891:
case 1560:
case 3336:
case 3943:
case 884:
case 621:
case 2894:
case 943:
case 1158:
case 3691:
case 1017:
case 1307:
case 1051:
case 3618:
case 2792:
case 1165:
case 1219:
case 3709:
case 933:
case 1946:
case 2666:
case 935:
case 716:
case 2800:
case 3456:
case 258:
case 330:
case 2342:
case 3727:
case 3593:
case 319:
case 945:
case 92:
case 2225:
case 3149:
case 1329:
case 466:
case 2690:
case 1433:
case 3084:
case 1883:
case 3822:
case 3530:
case 2962:
case 2517:
case 1688:
case 571:
case 1505:
case 1390:
case 2838:
case 1398:
case 3464:
case 2975:
case 1013:
case 1311:
case 2055:
case 2830:
case 60:
case 3759:
case 1680:
case 3364:
case 1457:
case 837:
case 3851:
case 1549:
case 1193:
case 3947:
case 2611:
case 2657:
case 3712:
case 2698:
case 3500:
case 3467:
case 388:
case 1354:
case 29:
case 2893:
case 2808:
case 1769:
case 755:
case 3814:
case 1454:
case 1544:
case 491:
case 3870:
case 237:
case 1312:
case 2578:
case 1002:
case 2846:
case 3754:
case 734:
case 247:
case 1900:
case 2659:
case 1764:
case 635:
case 3819:
case 167:
case 1459:
case 1213:
case 3711:
case 2255:
case 1201:
case 1146:
case 1359:
case 796:
case 1862:
case 62:
case 2627:
case 3089:
case 3144:
case 3790:
case 429:
case 3766:
case 1930:
case 21:
case 1424:
case 2043:
case 1032:
case 2552:
case 3673:
case 2025:
case 1993:
case 1327:
case 1908:
case 3284:
case 1756:
case 954:
case 3729:
case 1427:
case 3546:
case 3733:
case 2175:
case 2961:
case 321:
case 538:
case 3707:
case 2987:
case 3528:
case 3753:
case 1251:
case 619:
case 1217:
case 1309:
case 1019:
case 1676:
case 3960:
case 999:
case 630:
case 2820:
case 3062:
case 114:
case 2791:
case 1525:
case 3692:
case 2718:
case 2984:
case 3704:
case 1070:
case 2609:
case 1950:
case 3802:
case 284:
case 2476:
case 3261:
case 2899:
case 1763:
case 128:
case 1423:
case 921:
case 2189:
case 1339:
case 2235:
case 1171:
case 1128:
case 506:
case 1965:
case 3143:
case 354:
case 3677:
case 1958:
case 1439:
case 1021:
case 3216:
case 811:
case 3599:
case 1706:
case 2828:
case 57:
case 2871:
case 2249:
case 2047:
case 1889:
case 1345:
case 3125:
case 3283:
case 1781:
case 3075:
case 569:
case 76:
case 376:
case 3520:
case 688:
case 866:
case 3488:
case 230:
case 201:
case 3183:
case 358:
case 1122:
case 1561:
case 3800:
case 2456:
case 42:
case 785:
case 2727:
case 3388:
case 552:
case 219:
case 3690:
case 240:
case 1970:
case 3442:
case 3514:
case 1050:
case 2530:
case 3060:
case 1485:
case 821:
case 2822:
case 909:
case 3243:
case 691:
case 160:
case 2135:
case 1849:
case 3773:
case 1228:
case 3629:
case 4083:
case 911:
case 189:
case 1656:
case 3161:
case 233:
case 3522:
case 1583:
case 3975:
case 118:
case 1220:
case 243:
case 1114:
case 534:
case 2538:
case 2947:
case 1667:
case 163:
case 2395:
case 3603:
case 3657:
case 1921:
case 3611:
case 39:
case 288:
case 3380:
case 2500:
case 1516:
case 1664:
case 2944:
case 4061:
case 3893:
case 3808:
case 2814:
case 177:
case 1117:
case 3501:
case 2275:
case 80:
case 3777:
case 311:
case 1606:
case 2594:
case 1379:
case 647:
case 4087:
case 706:
case 3184:
case 2745:
case 1479:
case 165:
case 1896:
case 637:
case 3247:
case 77:
case 4084:
case 440:
case 876:
case 245:
case 419:
case 2831:
case 3774:
case 22:
case 2196:
case 3634:
case 2739:
case 769:
case 401:
case 1410:
case 3035:
case 3850:
case 1246:
case 738:
case 1491:
case 1418:
case 1636:
case 3858:
case 1113:
case 151:
case 2155:
case 2886:
case 1101:
case 3653:
case 842:
case 1008:
case 2572:
case 1318:
case 2168:
case 99:
case 488:
case 3607:
case 2463:
case 1855:
case 1186:
case 2813:
case 3894:
case 443:
case 1663:
case 2943:
case 783:
case 1587:
case 3792:
case 2436:
case 1868:
case 2709:
case 433:
case 3604:
case 2753:
case 2571:
case 550:
case 1715:
case 1392:
case 3987:
case 2996:
case 242:
case 1230:
case 1492:
case 2062:
case 232:
case 1293:
case 1208:
case 3791:
case 3609:
case 1046:
case 937:
case 384:
case 1931:
case 757:
case 3044:
case 553:
case 2348:
case 3645:
case 3235:
case 2143:
case 1986:
case 2448:
case 3871:
case 3249:
case 3828:
case 3639:
case 1238:
case 3047:
case 276:
case 1913:
case 3623:
case 1377:
case 2955:
case 1901:
case 82:
case 1843:
case 3779:
case 2520:
case 69:
case 991:
case 2870:
case 609:
case 1265:
case 104:
case 1258:
case 3578:
case 3916:
case 1626:
case 3659:
case 15:
case 1099:
case 1669:
case 4062:
case 3268:
case 2819:
case 299:
case 2703:
case 1575:
case 3983:
case 888:
case 2757:
case 2711:
case 1020:
case 840:
case 1071:
case 2905:
case 1373:
case 1028:
case 1917:
case 3441:
case 3519:
case 1847:
case 801:
case 31:
case 929:
case 1473:
case 1562:
case 3341:
case 561:
case 1788:
case 2147:
case 3552:
case 3570:
case 2546:
case 2878:
case 3961:
case 1742:
case 3876:
case 195:
case 3109:
case 2254:
case 2910:
case 3399:
case 1758:
case 112:
case 2302:
case 2012:
case 1797:
case 987:
case 3934:
case 1:
case 1892:
case 59:
case 282:
case 1140:
case 3320:
case 4009:
case 1602:
case 2211:
case 2257:
case 3755:
case 2298:
case 2024:
case 426:
case 1509:
case 3953:
case 3285:
case 885:
case 558:
case 2625:
case 1148:
case 96:
case 2787:
case 3907:
case 3328:
case 2332:
case 1343:
case 1041:
case 3471:
case 2266:
case 3760:
case 2174:
case 2848:
case 3904:
case 2229:
case 1288:
case 1242:
case 2233:
case 2177:
case 1632:
case 1963:
case 3540:
case 457:
case 2882:
case 1524:
case 1670:
case 1169:
case 2319:
case 848:
case 742:
case 1652:
case 2985:
case 2253:
case 616:
case 2541:
case 2826:
case 838:
case 732:
case 387:
case 1956:
case 1076:
case 2370:
case 1793:
case 3291:
case 1708:
case 2869:
case 3446:
case 3218:
case 3662:
case 3933:
case 190:
case 883:
case 2470:
case 1126:
case 2452:
case 1967:
case 257:
case 2173:
case 2237:
case 3569:
case 2421:
case 2039:
case 3124:
case 2478:
case 1700:
case 4027:
case 754:
case 3954:
case 806:
case 3210:
case 1995:
case 509:
case 70:
case 3675:
case 3127:
case 379:
case 2045:
case 869:
case 3749:
case 2234:
case 36:
case 776:
case 3526:
case 1559:
case 3841:
case 3279:
case 193:
case 87:
case 3998:
case 1678:
case 3911:
case 3438:
case 3616:
case 1926:
case 3079:
case 1449:
case 353:
case 1503:
case 2775:
case 110:
case 139:
case 2635:
case 4066:
case 1156:
case 644:
case 1349:
case 3129:
case 2422:
case 2034:
case 3842:
case 3274:
case 3010:
case 2580:
case 826:
case 1435:
case 3166:
case 745:
case 3683:
case 485:
case 529:
case 72:
case 269:
case 2856:
case 3567:
case 735:
case 2239:
case 3744:
case 3190:
case 2649:
case 3888:
case 1969:
case 238:
case 3103:
case 2542:
case 2414:
case 3198:
case 1533:
case 3880:
case 3157:
case 248:
case 2314:
case 2004:
case 1164:
case 2867:
case 3018:
case 3927:
case 1651:
case 2605:
case 3393:
case 3661:
case 1195:
case 2451:
case 3330:
case 1405:
case 283:
case 4003:
case 2209:
case 1590:
case 1614:
case 3924:
case 4011:
case 3430:
case 2007:
case 3292:
case 2864:
case 316:
case 1810:
case 469:
case 4037:
case 1940:
case 3134:
case 3350:
case 2431:
case 51:
case 740:
case 2227:
case 1088:
case 4034:
case 3743:
case 1879:
case 2066:
case 2110:
case 3536:
case 406:
case 687:
case 1396:
case 1507:
case 3137:
case 3394:
case 1468:
case 733:
case 2259:
case 2057:
case 2301:
case 2836:
case 537:
case 2003:
case 2313:
case 1163:
case 3945:
case 483:
case 3494:
case 1368:
case 743:
case 3815:
case 2401:
case 1799:
case 2054:
case 1080:
case 1136:
case 2974:
case 882:
case 3397:
case 1613:
case 3923:
case 3358:
case 2655:
case 355:
case 127:
case 3153:
case 3365:
case 2668:
case 3497:
case 3939:
case 1818:
case 3319:
case 1462:
case 3253:
case 117:
case 2705:
case 1717:
case 2092:
case 3541:
case 2112:
case 102:
case 1646:
case 1236:
case 850:
case 434:
case 2929:
case 3352:
case 2291:
case 3869:
case 1988:
case 1942:
case 178:
case 3761:
case 1263:
case 3452:
case 791:
case 1040:
case 2346:
case 14:
case 1048:
case 2735:
case 125:
case 2124:
case 1827:
case 3039:
case 3421:
case 853:
case 2954:
case 2127:
case 279:
case 1824:
case 3234:
case 545:
case 3644:
case 52:
case 2279:
case 26:
case 4073:
case 326:
case 2957:
case 1375:
case 3783:
case 1281:
case 1267:
case 2499:
case 2876:
case 3192:
case 2548:
case 2937:
case 1069:
case 737:
case 543:
case 1574:
case 1786:
case 3254:
case 1620:
case 234:
case 2768:
case 588:
case 4092:
case 382:
case 2755:
case 3203:
case 123:
case 3298:
case 164:
case 3257:
case 1577:
case 2139:
case 1845:
case 926:
case 3432:
case 501:
case 3625:
case 530:
case 1915:
case 1489:
case 519:
case 252:
case 540:
case 2428:
case 2471:
case 2904:
case 3784:
case 2689:
case 3848:
case 1671:
case 1628:
case 3177:
case 1731:
case 1823:
case 683:
case 3331:
case 2450:
case 216:
case 100:
case 758:
case 969:
case 3179:
case 852:
case 3431:
case 3029:
case 1056:
case 2134:
case 385:
case 1384:
case 1518:
case 2372:
case 3227:
case 1591:
case 261:
case 186:
case 1487:
case 3110:
case 3881:
case 2684:
case 1650:
case 2909:
case 3789:
case 906:
case 2273:
case 521:
case 4079:
case 2137:
case 834:
case 1226:
case 2394:
case 103:
case 3003:
case 1658:
case 3301:
case 3011:
case 3836:
case 2581:
case 3191:
case 2945:
case 2104:
case 1064:
case 1853:
case 3413:
case 1510:
case 1694:
case 896:
case 3863:
case 4018:
case 3212:
case 948:
case 2397:
case 1702:
case 2923:
case 599:
case 1115:
case 1067:
case 3486:
case 255:
case 2939:
case 2458:
case 450:
case 1269:
case 2079:
case 4085:
case 711:
case 2959:
case 3322:
case 3775:
case 306:
case 1866:
case 1890:
case 1188:
case 3422:
case 2564:
case 1483:
case 3034:
case 709:
case 461:
case 3580:
case 682:
case 2300:
case 1316:
case 1006:
case 380:
case 3223:
case 1778:
case 2912:
case 2595:
case 2683:
case 576:
case 2400:
case 369:
case 3856:
case 1638:
case 1829:
case 2567:
case 1416:
case 1248:
case 2888:
case 416:
case 3649:
case 2744:
case 3239:
case 2190:
case 2157:
case 250:
case 338:
case 1854:
case 1063:
case 3414:
case 3542:
case 2408:
case 1630:
case 2493:
case 542:
case 3895:
case 1240:
case 3867:
case 1461:
case 2556:
case 1770:
case 348:
case 2018:
case 2308:
case 532:
case 3762:
case 122:
case 671:
case 2154:
case 1898:
case 3451:
case 1180:
case 1857:
case 1811:
case 2924:
case 3053:
case 3007:
case 3317:
case 1608:
case 1693:
case 3782:
case 1597:
case 394:
case 2681:
case 1558:
case 673:
case 3999:
case 381:
case 3437:
case 1016:
case 1306:
case 1196:
case 3337:
case 3748:
case 1406:
case 1381:
case 2860:
case 749:
case 1275:
case 3555:
case 525:
case 3434:
case 1610:
case 2606:
case 1481:
case 53:
case 739:
case 3150:
case 3887:
case 346:
case 2038:
case 3568:
case 2479:
case 2855:
case 1801:
case 1336:
case 3453:
case 1943:
case 372:
case 2663:
case 3197:
case 3017:
case 3165:
case 3353:
case 1709:
case 418:
case 3596:
case 477:
case 4065:
case 2418:
case 3740:
case 251:
case 2113:
case 308:
case 1363:
case 3404:
case 1155:
case 3252:
case 1925:
case 3615:
case 2093:
case 424:
case 2584:
case 2776:
case 3304:
case 1550:
case 1530:
case 3366:
case 3100:
case 2485:
case 4038:
case 946:
case 3490:
case 260:
case 3642:
case 2271:
case 2849:
case 1135:
case 3466:
case 3505:
case 520:
case 936:
case 2919:
case 3390:
case 1289:
case 715:
case 2122:
case 3816:
case 2952:
case 2072:
case 1508:
case 981:
case 1685:
case 1084:
case 1149:
case 2835:
case 3329:
case 2097:
case 2978:
case 263:
case 2058:
case 4093:
case 188:
case 1500:
case 2299:
case 2516:
case 1467:
case 3086:
case 727:
case 2664:
case 451:
case 908:
case 3454:
case 523:
case 2065:
case 3535:
case 3001:
case 3357:
case 85:
case 1464:
case 3398:
case 133:
case 218:
case 3303:
case 2695:
case 3013:
case 3680:
case 2094:
case 804:
case 2220:
case 3457:
case 1851:
case 1817:
case 143:
case 1364:
case 3193:
case 2667:
case 3108:
case 1947:
case 4030:
case 2152:
case 7:
case 3547:
case 1819:
case 3938:
case 1703:
case 2575:
case 373:
case 3201:
case 1798:
case 1757:
case 2294:
case 3862:
case 2020:
case 824:
case 681:
case 2119:
case 646:
case 707:
case 3412:
case 795:
case 3767:
case 1935:
case 4046:
case 636:
case 2297:
case 3795:
case 3002:
case 2258:
case 3286:
case 1754:
case 2099:
case 818:
case 1673:
case 889:
case 1147:
case 3327:
case 2844:
case 586:
case 1729:
case 2914:
case 2250:
case 1821:
case 975:
case 1546:
case 3427:
case 3641:
case 2742:
case 1733:
case 1287:
case 2071:
case 531:
case 1905:
case 2917:
case 2028:
case 3324:
case 1144:
case 1790:
case 1089:
case 2847:
case 3875:
case 541:
case 3424:
case 2562:
case 2178:
case 3032:
case 1440:
case 3525:
case 45:
case 1692:
case 2293:
case 2208:
case 3214:
case 1340:
case 2046:
case 1802:
case 328:
case 262:
case 1753:
case 1571:
case 3217:
case 2715:
case 1707:
case 2392:
case 3309:
case 2589:
case 3199:
case 2640:
case 3736:
case 1960:
case 2492:
case 2102:
case 314:
case 2477:
case 2238:
case 2648:
case 3889:
case 3345:
case 1075:
case 2913:
case 176:
case 597:
case 2377:
case 1283:
case 505:
case 3781:
case 2901:
case 4028:
case 793:
case 3994:
case 498:
case 3339:
case 865:
case 1348:
case 2474:
case 3128:
case 1737:
case 3171:
case 659:
case 375:
case 3958:
case 3021:
case 2132:
case 1143:
case 1677:
case 1448:
case 2986:
case 1599:
case 1116:
case 2100:
case 2490:
case 1633:
case 2642:
case 446:
case 2232:
case 3741:
case 3849:
case 3385:
case 1773:
case 2390:
case 1629:
case 389:
case 700:
case 1800:
case 2138:
case 3952:
case 741:
case 1225:
case 3921:
case 1657:
case 1611:
case 3978:
case 1380:
case 3299:
case 2086:
case 1480:
case 3117:
case 2535:
case 2454:
case 1522:
case 507:
case 3695:
case 1975:
case 1161:
case 595:
case 1055:
case 4051:
case 1654:
case 2498:
case 3805:
case 259:
case 512:
case 2193:
case 1068:
case 3681:
case 3902:
case 2221:
case 294:
case 1586:
case 1774:
case 797:
case 1872:
case 1634:
case 4031:
case 1035:
case 1850:
case 1187:
case 593:
case 2434:
case 236:
case 1501:
case 3860:
case 3131:
case 65:
case 2920:
case 1184:
case 246:
case 1049:
case 2887:
case 960:
case 3896:
case 1247:
case 3038:
case 1637:
case 2172:
case 3030:
case 3855:
case 3186:
case 828:
case 2560:
case 3663:
case 272:
case 2158:
case 698:
case 2971:
case 2353:
case 2051:
case 2307:
case 4001:
case 2194:
case 2740:
case 3491:
case 1897:
case 3101:
case 3113:
case 2404:
case 2252:
case 3318:
case 3008:
case 2615:
case 1865:
case 2014:
case 3776:
case 1791:
case 3208:
case 2052:
case 95:
case 689:
case 2070:
case 4002:
case 1609:
case 1899:
case 191:
case 660:
case 3715:
case 1987:
case 1205:
case 2217:
case 2251:
case 3589:
case 2019:
case 2676:
case 3640:
case 3492:
case 808:
case 702:
case 2409:
case 3102:
case 214:
case 2543:
case 1532:
case 1828:
case 1871:
case 2889:
case 677:
case 3238:
case 129:
case 663:
case 2222:
case 3913:
case 1623:
case 3682:
case 3377:
case 624:
case 2994:
case 2445:
case 3843:
case 1044:
case 1189:
case 48:
case 725:
case 2965:
case 2323:
case 2078:
case 2997:
case 2021:
case 836:
case 2706:
case 3986:
case 3374:
case 1710:
case 3669:
case 3170:
case 2764:
case 2547:
case 2938:
case 2459:
case 3152:
case 1268:
case 2213:
case 1983:
case 4019:
case 2201:
case 1612:
case 3922:
case 2146:
case 2359:
case 3020:
case 3294:
case 2862:
case 428:
case 3119:
case 962:
case 665:
case 304:
case 1578:
case 2312:
case 1846:
case 4070:
case 35:
case 2286:
case 3099:
case 1659:
case 2900:
case 3780:
case 3272:
case 1552:
case 592:
case 2993:
case 2327:
case 3788:
case 3914:
case 1570:
case 475:
case 2427:
case 398:
case 1785:
case 3373:
case 3951:
case 1627:
case 3071:
case 2324:
case 3473:
case 2875:
case 651:
case 3121:
case 3178:
case 2032:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1769230801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,];
var gg_b = "1769230801/";

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
