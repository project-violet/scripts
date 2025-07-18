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
case 382:
case 1912:
case 806:
case 1091:
case 881:
case 2776:
case 1303:
case 3035:
case 2345:
case 2913:
case 2969:
case 2302:
case 3103:
case 1980:
case 3653:
case 2801:
case 3190:
case 1078:
case 481:
case 2426:
case 1549:
case 1205:
case 406:
case 1390:
case 399:
case 3579:
case 2540:
case 2989:
case 2338:
case 2467:
case 1663:
case 132:
case 3415:
case 3803:
case 101:
case 312:
case 2778:
case 620:
case 2875:
case 0:
case 2174:
case 2458:
case 509:
case 1594:
case 3034:
case 2610:
case 2344:
case 2621:
case 51:
case 933:
case 2336:
case 1683:
case 708:
case 135:
case 1076:
case 2837:
case 2101:
case 2230:
case 2791:
case 3890:
case 411:
case 1532:
case 315:
case 1204:
case 2428:
case 3911:
case 1024:
case 2388:
case 605:
case 1314:
case 2475:
case 552:
case 2755:
case 113:
case 2858:
case 3670:
case 3561:
case 2904:
case 1717:
case 2998:
case 333:
case 2187:
case 204:
case 1930:
case 3718:
case 2126:
case 2828:
case 2725:
case 2368:
case 602:
case 3490:
case 912:
case 3229:
case 2971:
case 3085:
case 403:
case 2996:
case 2357:
case 1943:
case 3064:
case 2887:
case 2280:
case 3814:
case 2386:
case 2583:
case 985:
case 703:
case 1289:
case 2856:
case 1315:
case 938:
case 2754:
case 2017:
case 2260:
case 1510:
case 174:
case 54:
case 2212:
case 1551:
case 2128:
case 2401:
case 69:
case 2366:
case 1213:
case 4046:
case 1738:
case 1835:
case 1134:
case 782:
case 3425:
case 3962:
case 736:
case 2100:
case 2231:
case 598:
case 102:
case 311:
case 415:
case 3951:
case 1799:
case 2044:
case 539:
case 290:
case 2620:
case 2036:
case 596:
case 3346:
case 105:
case 2611:
case 1270:
case 3982:
case 3878:
case 785:
case 613:
case 460:
case 1484:
case 646:
case 4034:
case 2703:
case 799:
case 2650:
case 1146:
case 3392:
case 1573:
case 1376:
case 3847:
case 2279:
case 3921:
case 485:
case 4077:
case 2045:
case 3335:
case 1391:
case 3669:
case 1465:
case 2923:
case 275:
case 247:
case 3424:
case 712:
case 3701:
case 2800:
case 499:
case 2207:
case 1148:
case 2893:
case 3689:
case 838:
case 308:
case 482:
case 2416:
case 1952:
case 3147:
case 1378:
case 885:
case 1177:
case 3348:
case 2038:
case 1961:
case 3774:
case 1090:
case 2953:
case 715:
case 3454:
case 2400:
case 2673:
case 1434:
case 2057:
case 287:
case 3642:
case 1768:
case 618:
case 1865:
case 1164:
case 1672:
case 341:
case 1511:
case 1409:
case 2086:
case 3696:
case 1325:
case 477:
case 2027:
case 1520:
case 3155:
case 3476:
case 3384:
case 2222:
case 1355:
case 22:
case 2066:
case 2118:
case 2714:
case 845:
case 3908:
case 3994:
case 75:
case 1446:
case 981:
case 1014:
case 688:
case 3580:
case 1864:
case 1165:
case 3604:
case 1324:
case 2970:
case 551:
case 3698:
case 2088:
case 45:
case 234:
case 303:
case 3491:
case 3283:
case 1435:
case 742:
case 1354:
case 2068:
case 3447:
case 2818:
case 3671:
case 3560:
case 601:
case 1786:
case 3995:
case 911:
case 1641:
case 4065:
case 120:
case 777:
case 3855:
case 85:
case 1359:
case 430:
case 2311:
case 768:
case 1083:
case 575:
case 2287:
case 37:
case 1676:
case 3214:
case 3781:
case 2880:
case 697:
case 3936:
case 2082:
case 2350:
case 1869:
case 766:
case 3752:
case 922:
case 1813:
case 2226:
case 1405:
case 1329:
case 3609:
case 2062:
case 1974:
case 2860:
case 3761:
case 3129:
case 1442:
case 2010:
case 3634:
case 590:
case 239:
case 4013:
case 3859:
case 3053:
case 1678:
case 154:
case 2180:
case 4069:
case 1710:
case 466:
case 3677:
case 3938:
case 868:
case 2719:
case 640:
case 1647:
case 2763:
case 3999:
case 1189:
case 2524:
case 866:
case 3313:
case 2112:
case 1782:
case 1721:
case 3497:
case 2430:
case 3945:
case 296:
case 2008:
case 4042:
case 1749:
case 2275:
case 3966:
case 126:
case 1928:
case 3203:
case 1655:
case 3927:
case 3459:
case 2740:
case 3841:
case 721:
case 1706:
case 3986:
case 957:
case 2032:
case 3342:
case 2237:
case 3290:
case 3305:
case 3957:
case 1839:
case 763:
case 1958:
case 3371:
case 4004:
case 494:
case 662:
case 2480:
case 587:
case 4039:
case 1489:
case 1341:
case 2274:
case 2591:
case 679:
case 3304:
case 4071:
case 1842:
case 3398:
case 665:
case 7:
case 894:
case 293:
case 97:
case 1956:
case 2412:
case 1198:
case 3339:
case 2843:
case 3070:
case 1794:
case 1805:
case 863:
case 264:
case 1469:
case 3665:
case 3197:
case 2130:
case 1987:
case 2948:
case 3556:
case 1720:
case 368:
case 2152:
case 2161:
case 2638:
case 77:
case 1690:
case 1153:
case 9:
case 1470:
case 2122:
case 2645:
case 2602:
case 626:
case 1123:
case 2479:
case 1383:
case 2992:
case 2321:
case 400:
case 2515:
case 2946:
case 1557:
case 2382:
case 227:
case 994:
case 2407:
case 800:
case 1285:
case 3433:
case 571:
case 1029:
case 1823:
case 2351:
case 28:
case 1566:
case 162:
case 330:
case 2644:
case 2362:
case 179:
case 3254:
case 1527:
case 3575:
case 2772:
case 2807:
case 2131:
case 3071:
case 661:
case 2461:
case 321:
case 4070:
case 425:
case 822:
case 2503:
case 2395:
case 2965:
case 3537:
case 394:
case 2590:
case 3276:
case 623:
case 1538:
case 1292:
case 3004:
case 1170:
case 2422:
case 24:
case 363:
case 825:
case 2481:
case 2349:
case 3833:
case 2293:
case 3039:
case 1599:
case 1246:
case 504:
case 1544:
case 2394:
case 252:
case 2797:
case 3730:
case 2831:
case 2666:
case 3483:
case 966:
case 2984:
case 3:
case 3247:
case 2741:
case 2073:
case 654:
case 3133:
case 2332:
case 2964:
case 3419:
case 3501:
case 1072:
case 968:
case 725:
case 3463:
case 3005:
case 1333:
case 1536:
case 233:
case 817:
case 2815:
case 1997:
case 2718:
case 1356:
case 1188:
case 2670:
case 1211:
case 3475:
case 4068:
case 1679:
case 2552:
case 3939:
case 107:
case 3388:
case 1866:
case 434:
case 1764:
case 1168:
case 1326:
case 1523:
case 3606:
case 417:
case 1220:
case 2490:
case 3126:
case 1367:
case 1438:
case 4088:
case 3828:
case 3474:
case 242:
case 3856:
case 3158:
case 3754:
case 3583:
case 734:
case 2064:
case 3887:
case 2814:
case 1444:
case 1888:
case 1785:
case 3357:
case 3632:
case 521:
case 1186:
case 150:
case 3519:
case 3366:
case 594:
case 3826:
case 1166:
case 1018:
case 644:
case 3608:
case 3017:
case 2084:
case 487:
case 1844:
case 790:
case 4038:
case 472:
case 3913:
case 847:
case 3487:
case 1375:
case 875:
case 1792:
case 2623:
case 236:
case 2035:
case 3874:
case 3456:
case 3776:
case 673:
case 2531:
case 1709:
case 475:
case 371:
case 3989:
case 3467:
case 872:
case 1199:
case 447:
case 299:
case 530:
case 1652:
case 1337:
case 3243:
case 285:
case 3399:
case 1138:
case 1836:
case 869:
case 1570:
case 238:
case 2653:
case 2190:
case 1777:
case 890:
case 3344:
case 1929:
case 2034:
case 1802:
case 3875:
case 3174:
case 3662:
case 747:
case 212:
case 3458:
case 2507:
case 775:
case 1144:
case 1845:
case 4036:
case 3651:
case 2803:
case 3747:
case 1374:
case 2415:
case 2920:
case 215:
case 1838:
case 566:
case 1136:
case 3682:
case 4044:
case 3428:
case 2297:
case 3837:
case 3791:
case 2046:
case 769:
case 2950:
case 1899:
case 1466:
case 614:
case 1301:
case 904:
case 241:
case 2605:
case 3261:
case 2767:
case 184:
case 3057:
case 2642:
case 387:
case 2364:
case 1058:
case 972:
case 3252:
case 3493:
case 1117:
case 2994:
case 32:
case 3714:
case 3118:
case 3317:
case 1028:
case 947:
case 2756:
case 66:
case 2476:
case 173:
case 2639:
case 2283:
case 2728:
case 2949:
case 3970:
case 137:
case 3088:
case 1087:
case 114:
case 1251:
case 1026:
case 1569:
case 2219:
case 2478:
case 2263:
case 2758:
case 2154:
case 2855:
case 1067:
case 1210:
case 1817:
case 3116:
case 3068:
case 2447:
case 3715:
case 1300:
case 3620:
case 211:
case 3100:
case 3231:
case 2891:
case 2910:
case 2847:
case 771:
case 2240:
case 1542:
case 176:
case 3703:
case 3572:
case 2878:
case 1001:
case 2543:
case 2346:
case 3036:
case 1393:
case 2982:
case 1249:
case 1612:
case 3207:
case 1075:
case 2191:
case 375:
case 1294:
case 471:
case 2424:
case 1208:
case 1571:
case 2613:
case 92:
case 57:
case 281:
case 3597:
case 2774:
case 3953:
case 500:
case 372:
case 1037:
case 871:
case 1598:
case 3038:
case 1504:
case 3416:
case 369:
case 3099:
case 2689:
case 2233:
case 2377:
case 1539:
case 3740:
case 1509:
case 2203:
case 2500:
case 1618:
case 3617:
case 1534:
case 996:
case 3008:
case 1173:
case 2957:
case 2396:
case 1299:
case 2172:
case 3237:
case 2897:
case 3576:
case 3373:
case 2986:
case 1592:
case 222:
case 149:
case 752:
case 3006:
case 1244:
case 541:
case 2872:
case 2197:
case 364:
case 1914:
case 2707:
case 225:
case 3843:
case 2070:
case 1577:
case 3049:
case 2339:
case 1079:
case 393:
case 624:
case 3460:
case 2304:
case 167:
case 1548:
case 2398:
case 506:
case 1288:
case 3082:
case 1723:
case 3350:
case 195:
case 27:
case 4020:
case 2781:
case 1564:
case 2214:
case 993:
case 2646:
case 1150:
case 3256:
case 48:
case 964:
case 3021:
case 189:
case 656:
case 1584:
case 3010:
case 3267:
case 71:
case 4050:
case 3812:
case 1600:
case 192:
case 3320:
case 3443:
case 3226:
case 2944:
case 88:
case 3555:
case 1850:
case 2999:
case 3524:
case 1257:
case 1052:
case 727:
case 398:
case 41:
case 119:
case 2389:
case 1061:
case 2938:
case 2677:
case 2053:
case 339:
case 1903:
case 3228:
case 2497:
case 1820:
case 1227:
case 3430:
case 3554:
case 2902:
case 2023:
case 2829:
case 78:
case 409:
case 2313:
case 4049:
case 1742:
case 3461:
case 221:
case 3395:
case 1626:
case 1331:
case 751:
case 1195:
case 1667:
case 2743:
case 1106:
case 1808:
case 493:
case 3772:
case 3452:
case 2833:
case 2039:
case 2370:
case 1924:
case 3349:
case 695:
case 263:
case 3481:
case 1656:
case 2140:
case 3179:
case 927:
case 545:
case 2098:
case 1149:
case 294:
case 1687:
case 1895:
case 2483:
case 2917:
case 3984:
case 3797:
case 2574:
case 1421:
case 352:
case 3666:
case 2291:
case 1628:
case 3627:
case 1955:
case 533:
case 355:
case 2005:
case 1451:
case 1132:
case 451:
case 3686:
case 764:
case 1771:
case 1043:
case 2501:
case 2133:
case 1925:
case 4008:
case 3332:
case 4094:
case 2042:
case 793:
case 1462:
case 3741:
case 3073:
case 3879:
case 560:
case 2587:
case 1080:
case 1352:
case 1637:
case 3514:
case 3161:
case 496:
case 3977:
case 3638:
case 1947:
case 3431:
case 3699:
case 2089:
case 1406:
case 955:
case 1991:
case 3759:
case 498:
case 1012:
case 1862:
case 1675:
case 3218:
case 2440:
case 3479:
case 1810:
case 1060:
case 1217:
case 2567:
case 1381:
case 2013:
case 2863:
case 515:
case 3122:
case 3645:
case 266:
case 1121:
case 4062:
case 1769:
case 1713:
case 3852:
case 3407:
case 1494:
case 2183:
case 3946:
case 536:
case 798:
case 3382:
case 1976:
case 3515:
case 2712:
case 124:
case 667:
case 1182:
case 3011:
case 796:
case 538:
case 3020:
case 2163:
case 2254:
case 4082:
case 1789:
case 2528:
case 1674:
case 2780:
case 1162:
case 1110:
case 1830:
case 520:
case 1576:
case 1373:
case 609:
case 3915:
case 2105:
case 2804:
case 2196:
case 2898:
case 2795:
case 1143:
case 2372:
case 228:
case 2033:
case 2142:
case 2625:
case 1275:
case 3202:
case 756:
case 2655:
case 61:
case 3411:
case 3509:
case 2928:
case 1412:
case 2956:
case 3330:
case 3873:
case 3079:
case 367:
case 1460:
case 2624:
case 2413:
case 989:
case 1201:
case 2708:
case 627:
case 456:
case 2198:
case 3577:
case 1049:
case 2794:
case 858:
case 1843:
case 68:
case 4030:
case 1733:
case 3244:
case 856:
case 3031:
case 2967:
case 2732:
case 2329:
case 261:
case 2496:
case 1226:
case 73:
case 1443:
case 424:
case 2019:
case 2869:
case 949:
case 1267:
case 1010:
case 3584:
case 2442:
case 3753:
case 2974:
case 1320:
case 3268:
case 392:
case 3473:
case 1311:
case 2083:
case 2889:
case 1525:
case 3150:
case 389:
case 223:
case 395:
case 1350:
case 3723:
case 3111:
case 3288:
case 1287:
case 64:
case 2439:
case 2975:
case 30:
case 1112:
case 3081:
case 3266:
case 2404:
case 1228:
case 1783:
case 2498:
case 3903:
case 4080:
case 2721:
case 3312:
case 652:
case 3286:
case 853:
case 3811:
case 2937:
case 2678:
case 254:
case 1180:
case 3565:
case 3990:
case 2471:
case 1524:
case 655:
case 1258:
case 1763:
case 1719:
case 4012:
case 3380:
case 502:
case 370:
case 3832:
case 3687:
case 2097:
case 1590:
case 867:
case 3379:
case 2599:
case 1293:
case 1179:
case 449:
case 1481:
case 574:
case 14:
case 4031:
case 1985:
case 3796:
case 3106:
case 991:
case 467:
case 2234:
case 2916:
case 1131:
case 1807:
case 1452:
case 1306:
case 3626:
case 1395:
case 1461:
case 2209:
case 2453:
case 3331:
case 1332:
case 2248:
case 1657:
case 3410:
case 1741:
case 767:
case 3771:
case 2333:
case 1686:
case 3451:
case 2277:
case 155:
case 1964:
case 953:
case 2615:
case 546:
case 3739:
case 3628:
case 2544:
case 3955:
case 3704:
case 3108:
case 3798:
case 3194:
case 1831:
case 1666:
case 3421:
case 33:
case 3449:
case 2470:
case 1645:
case 1122:
case 4061:
case 2603:
case 2750:
case 2568:
case 1218:
case 3675:
case 4052:
case 3060:
case 2284:
case 3810:
case 1602:
case 651:
case 1152:
case 2720:
case 3361:
case 3406:
case 3352:
case 2690:
case 1638:
case 1977:
case 586:
case 3882:
case 4022:
case 1729:
case 819:
case 2588:
case 501:
case 2319:
case 262:
case 489:
case 1881:
case 3162:
case 3674:
case 18:
case 2566:
case 1351:
case 956:
case 2285:
case 70:
case 210:
case 1362:
case 1909:
case 1644:
case 3789:
case 1822:
case 3432:
case 3151:
case 892:
case 2853:
case 324:
case 1321:
case 1515:
case 2265:
case 693:
case 516:
case 2586:
case 265:
case 3182:
case 1861:
case 889:
case 1407:
case 492:
case 3769:
case 543:
case 3121:
case 127:
case 770:
case 1382:
case 1050:
case 2557:
case 3408:
case 719:
case 3827:
case 540:
case 1368:
case 2054:
case 1437:
case 1828:
case 1725:
case 3438:
case 773:
case 3016:
case 3631:
case 3499:
case 3387:
case 213:
case 837:
case 1156:
case 3679:
case 1475:
case 3857:
case 1388:
case 814:
case 2024:
case 3356:
case 3997:
case 104:
case 3886:
case 3211:
case 3784:
case 246:
case 1904:
case 3445:
case 784:
case 1212:
case 2562:
case 3607:
case 1327:
case 1694:
case 597:
case 3328:
case 2510:
case 1260:
case 1608:
case 1366:
case 2213:
case 1563:
case 1519:
case 350:
case 96:
case 1128:
case 1826:
case 2551:
case 473:
case 1280:
case 669:
case 3358:
case 2943:
case 1632:
case 1357:
case 3785:
case 2582:
case 1905:
case 714:
case 1754:
case 283:
case 329:
case 2521:
case 2315:
case 672:
case 2633:
case 1583:
case 1386:
case 884:
case 3836:
case 1399:
case 444:
case 2078:
case 510:
case 579:
case 2980:
case 1338:
case 1467:
case 1989:
case 171:
case 2242:
case 4075:
case 3468:
case 218:
case 2390:
case 562:
case 3273:
case 2960:
case 844:
case 2303:
case 2506:
case 1456:
case 2912:
case 3681:
case 1302:
case 778:
case 216:
case 3622:
case 3844:
case 2239:
case 235:
case 1533:
case 1336:
case 3301:
case 288:
case 3466:
case 2204:
case 907:
case 617:
case 3838:
case 3735:
case 3959:
case 1791:
case 478:
case 580:
case 634:
case 3486:
case 286:
case 3845:
case 4001:
case 3374:
case 2663:
case 3802:
case 1344:
case 476:
case 3000:
case 1458:
case 1222:
case 2492:
case 3028:
case 1317:
case 373:
case 2520:
case 1027:
case 850:
case 3117:
case 2184:
case 1118:
case 429:
case 1066:
case 1714:
case 12:
case 4018:
case 2511:
case 829:
case 1086:
case 2409:
case 671:
case 2672:
case 2015:
case 1559:
case 2786:
case 3210:
case 3067:
case 2884:
case 978:
case 2354:
case 750:
case 2477:
case 3513:
case 220:
case 1088:
case 976:
case 3282:
case 314:
case 2165:
case 2697:
case 807:
case 3630:
case 117:
case 3589:
case 729:
case 2727:
case 3056:
case 134:
case 2979:
case 3001:
case 1572:
case 2270:
case 3249:
case 205:
case 3596:
case 3393:
case 4000:
case 914:
case 2376:
case 2573:
case 3983:
case 1650:
case 3417:
case 2848:
case 2745:
case 1193:
case 202:
case 2629:
case 4093:
case 231:
case 1620:
case 3300:
case 2464:
case 3919:
case 554:
case 1044:
case 2378:
case 169:
case 2952:
case 1416:
case 2846:
case 2148:
case 1099:
case 2347:
case 172:
case 3680:
case 1597:
case 2961:
case 3598:
case 561:
case 2177:
case 1541:
case 2465:
case 1045:
case 2922:
case 2003:
case 2809:
case 3075:
case 1207:
case 29:
case 2981:
case 3612:
case 973:
case 3660:
case 147:
case 3208:
case 2736:
case 1923:
case 3294:
case 2834:
case 2135:
case 2600:
case 2268:
case 1518:
case 2473:
case 3517:
case 810:
case 621:
case 1129:
case 3813:
case 3019:
case 100:
case 1472:
case 3869:
case 3063:
case 2120:
case 1609:
case 1944:
case 780:
case 3405:
case 2564:
case 1781:
case 479:
case 3676:
case 663:
case 1159:
case 295:
case 323:
case 3889:
case 2150:
case 1497:
case 2312:
case 3169:
case 3721:
case 1945:
case 2022:
case 20:
case 1369:
case 3691:
case 1635:
case 926:
case 880:
case 3439:
case 576:
case 2585:
case 1829:
case 1023:
case 2052:
case 2257:
case 3471:
case 2850:
case 3751:
case 3762:
case 354:
case 3678:
case 6:
case 1053:
case 578:
case 1859:
case 480:
case 1938:
case 2061:
case 1677:
case 1389:
case 2343:
case 2299:
case 3033:
case 3839:
case 1593:
case 1305:
case 797:
case 954:
case 3196:
case 1342:
case 2592:
case 1986:
case 1290:
case 1172:
case 1664:
case 668:
case 2420:
case 1203:
case 2509:
case 3928:
case 4072:
case 1779:
case 1459:
case 3655:
case 3749:
case 2770:
case 2450:
case 1966:
case 2007:
case 2618:
case 3896:
case 2236:
case 1988:
case 740:
case 2577:
case 3794:
case 125:
case 1339:
case 897:
case 1707:
case 1197:
case 4041:
case 1872:
case 573:
case 3139:
case 2548:
case 1304:
case 2873:
case 3040:
case 2330:
case 3489:
case 3171:
case 497:
case 249:
case 1968:
case 3341:
case 3926:
case 3654:
case 584:
case 3123:
case 1567:
case 2060:
case 2810:
case 2862:
case 1440:
case 3568:
case 2991:
case 2012:
case 3750:
case 3603:
case 1069:
case 1255:
case 454:
case 2381:
case 761:
case 1819:
case 3588:
case 2978:
case 2637:
case 3153:
case 2080:
case 1225:
case 2361:
case 723:
case 2495:
case 1089:
case 1883:
case 2947:
case 940:
case 3720:
case 2821:
case 1556:
case 2789:
case 2151:
case 1163:
case 3527:
case 1254:
case 379:
case 310:
case 3823:
case 4083:
case 1433:
case 3285:
case 2162:
case 1780:
case 2674:
case 3319:
case 423:
case 3566:
case 3363:
case 2408:
case 1183:
case 2713:
case 997:
case 3586:
case 461:
case 823:
case 4019:
case 2601:
case 3265:
case 3059:
case 224:
case 3853:
case 4063:
case 258:
case 2656:
case 3423:
case 1039:
case 2924:
case 1370:
case 550:
case 3097:
case 1537:
case 194:
case 2030:
case 3614:
case 3340:
case 2149:
case 3170:
case 1004:
case 3538:
case 726:
case 962:
case 2331:
case 3209:
case 3545:
case 121:
case 600:
case 2705:
case 3502:
case 3234:
case 2667:
case 2106:
case 1463:
case 3072:
case 1501:
case 1419:
case 1278:
case 3536:
case 657:
case 2043:
case 2771:
case 3870:
case 828:
case 2462:
case 2658:
case 3248:
case 2925:
case 826:
case 980:
case 1291:
case 1574:
case 3918:
case 2704:
case 3235:
case 2895:
case 1917:
case 2806:
case 2955:
case 2307:
case 2628:
case 318:
case 3047:
case 199:
case 1048:
case 2199:
case 2709:
case 3242:
case 138:
case 1272:
case 3980:
case 2570:
case 2661:
case 1077:
case 185:
case 591:
case 2138:
case 2375:
case 4090:
case 524:
case 2746:
case 1103:
case 2844:
case 316:
case 343:
case 3912:
case 1035:
case 2792:
case 702:
case 3506:
case 3303:
case 2427:
case 2959:
case 1297:
case 913:
case 603:
case 2136:
case 3204:
case 2735:
case 3532:
case 3298:
case 2301:
case 388:
case 805:
case 335:
case 946:
case 3683:
case 3239:
case 2093:
case 2899:
case 1950:
case 2000:
case 1507:
case 112:
case 2929:
case 3271:
case 2777:
case 1920:
case 1415:
case 3619:
case 3663:
case 948:
case 301:
case 2486:
case 1009:
case 1803:
case 386:
case 986:
case 2523:
case 348:
case 1581:
case 2168:
case 2016:
case 932:
case 15:
case 1522:
case 2220:
case 3717:
case 2886:
case 1403:
case 2188:
case 1561:
case 2211:
case 346:
case 2553:
case 1718:
case 420:
case 3930:
case 133:
case 988:
case 2402:
case 207:
case 2387:
case 1552:
case 3314:
case 177:
case 3551:
case 2127:
case 250:
case 4015:
case 3269:
case 916:
case 606:
case 2328:
case 3562:
case 2868:
case 374:
case 2166:
case 2607:
case 3289:
case 759:
case 3315:
case 3521:
case 556:
case 3582:
case 2972:
case 918:
case 1392:
case 2542:
case 276:
case 718:
case 3848:
case 1921:
case 50:
case 3573:
case 1982:
case 2596:
case 401:
case 2505:
case 3192:
case 3877:
case 888:
case 486:
case 3659:
case 1176:
case 432:
case 2001:
case 959:
case 111:
case 716:
case 3464:
case 278:
case 4076:
case 2963:
case 1910:
case 1425:
case 435:
case 3738:
case 832:
case 570:
case 920:
case 1891:
case 2074:
case 519:
case 3961:
case 3892:
case 818:
case 3177:
case 2232:
case 2598:
case 3090:
case 2680:
case 1377:
case 2539:
case 1233:
case 3744:
case 3148:
case 3378:
case 4091:
case 1147:
case 108:
case 1424:
case 2294:
case 3135:
case 3834:
case 645:
case 39:
case 4047:
case 816:
case 2075:
case 1701:
case 3981:
case 1335:
case 732:
case 843:
case 3465:
case 4078:
case 1613:
case 3391:
case 3907:
case 2117:
case 3223:
case 1908:
case 3184:
case 3885:
case 273:
case 3520:
case 636:
case 1384:
case 2028:
case 874:
case 3672:
case 284:
case 4055:
case 1767:
case 3409:
case 3511:
case 1605:
case 883:
case 474:
case 1364:
case 638:
case 1125:
case 1642:
case 713:
case 3550:
case 1758:
case 1263:
case 2316:
case 1154:
case 320:
case 3641:
case 2569:
case 2026:
case 3757:
case 931:
case 848:
case 2251:
case 1512:
case 660:
case 3931:
case 3354:
case 1906:
case 3786:
case 774:
case 2210:
case 1671:
case 2067:
case 3727:
case 448:
case 1491:
case 1365:
case 103:
case 2221:
case 2589:
case 1124:
case 1283:
case 615:
case 3165:
case 3864:
case 3697:
case 1698:
case 1949:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752861602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,];
var gg_b = "1752861602/";

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
