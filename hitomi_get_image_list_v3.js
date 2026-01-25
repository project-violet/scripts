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
case 2778:
case 591:
case 3328:
case 1576:
case 2602:
case 263:
case 1513:
case 2575:
case 1405:
case 3967:
case 492:
case 3984:
case 3956:
case 623:
case 96:
case 3908:
case 3952:
case 2043:
case 3004:
case 1930:
case 2933:
case 1040:
case 1605:
case 3380:
case 320:
case 2253:
case 2606:
case 3232:
case 1572:
case 1348:
case 259:
case 94:
case 11:
case 3784:
case 2563:
case 3672:
case 1560:
case 3767:
case 4010:
case 3830:
case 1852:
case 3413:
case 212:
case 3476:
case 484:
case 667:
case 3331:
case 2855:
case 2074:
case 3472:
case 1884:
case 1856:
case 409:
case 3147:
case 3990:
case 1808:
case 3497:
case 1981:
case 3613:
case 1292:
case 3218:
case 1730:
case 3676:
case 3752:
case 3357:
case 2300:
case 1264:
case 1971:
case 2246:
case 451:
case 24:
case 3654:
case 1219:
case 364:
case 1245:
case 959:
case 668:
case 142:
case 2084:
case 2056:
case 3482:
case 713:
case 636:
case 1874:
case 2427:
case 2067:
case 552:
case 2920:
case 3551:
case 943:
case 887:
case 3454:
case 26:
case 344:
case 3943:
case 4047:
case 319:
case 2988:
case 2324:
case 3774:
case 162:
case 1709:
case 3225:
case 826:
case 62:
case 2720:
case 2269:
case 1723:
case 1582:
case 352:
case 3315:
case 1106:
case 1089:
case 3078:
case 564:
case 2105:
case 2341:
case 1651:
case 742:
case 1093:
case 912:
case 3871:
case 2704:
case 6:
case 1586:
case 154:
case 2398:
case 544:
case 2585:
case 516:
case 3248:
case 1332:
case 2307:
case 1471:
case 2368:
case 29:
case 130:
case 3117:
case 1178:
case 904:
case 3189:
case 3982:
case 993:
case 2859:
case 481:
case 574:
case 4040:
case 394:
case 2404:
case 2488:
case 3002:
case 3234:
case 3509:
case 582:
case 3851:
case 1228:
case 2299:
case 973:
case 1318:
case 3377:
case 41:
case 829:
case 3782:
case 3674:
case 3392:
case 2076:
case 1010:
case 27:
case 2885:
case 1231:
case 3155:
case 1854:
case 2013:
case 1886:
case 1882:
case 885:
case 382:
case 2072:
case 1543:
case 956:
case 503:
case 3396:
case 3754:
case 730:
case 2589:
case 30:
case 2517:
case 1630:
case 151:
case 1325:
case 3027:
case 1905:
case 3467:
case 406:
case 442:
case 1897:
case 2958:
case 3456:
case 3484:
case 677:
case 3408:
case 2054:
case 2086:
case 561:
case 204:
case 2875:
case 665:
case 2902:
case 2810:
case 293:
case 2244:
case 3319:
case 3387:
case 3345:
case 1590:
case 3772:
case 3364:
case 2593:
case 3608:
case 1556:
case 1508:
case 2706:
case 3229:
case 2171:
case 341:
case 50:
case 1120:
case 3913:
case 2221:
case 1860:
case 3805:
case 413:
case 2863:
case 3997:
case 1215:
case 2702:
case 858:
case 3530:
case 1552:
case 2216:
case 1737:
case 2678:
case 1077:
case 4094:
case 1439:
case 188:
case 207:
case 3166:
case 2845:
case 1103:
case 616:
case 733:
case 3310:
case 2528:
case 81:
case 1599:
case 1726:
case 429:
case 2274:
case 3375:
case 1639:
case 682:
case 1722:
case 970:
case 1201:
case 485:
case 2124:
case 3162:
case 1842:
case 3826:
case 2761:
case 2925:
case 1050:
case 4028:
case 2434:
case 3032:
case 3115:
case 300:
case 2053:
case 3149:
case 3942:
case 908:
case 1240:
case 1358:
case 3683:
case 2594:
case 1306:
case 3539:
case 1279:
case 3288:
case 2305:
case 3714:
case 2141:
case 133:
case 694:
case 3769:
case 788:
case 881:
case 3946:
case 3483:
case 1922:
case 990:
case 539:
case 578:
case 4070:
case 397:
case 3128:
case 1641:
case 2351:
case 2732:
case 3500:
case 1293:
case 3421:
case 3061:
case 1565:
case 1707:
case 155:
case 1544:
case 726:
case 3753:
case 2290:
case 3673:
case 3359:
case 1735:
case 3616:
case 458:
case 3278:
case 2736:
case 1441:
case 661:
case 3412:
case 3995:
case 3180:
case 1853:
case 565:
case 1498:
case 1148:
case 2429:
case 3807:
case 907:
case 4057:
case 290:
case 3953:
case 806:
case 1968:
case 3444:
case 2403:
case 13:
case 842:
case 1907:
case 1521:
case 3465:
case 2932:
case 1400:
case 2718:
case 2570:
case 2252:
case 2549:
case 3233:
case 232:
case 1255:
case 365:
case 3644:
case 2603:
case 3131:
case 3598:
case 2256:
case 3795:
case 2208:
case 126:
case 1600:
case 755:
case 1045:
case 1087:
case 3541:
case 2936:
case 1019:
case 187:
case 3438:
case 1935:
case 2046:
case 2877:
case 2126:
case 1094:
case 1838:
case 4077:
case 4092:
case 129:
case 2272:
case 3695:
case 3765:
case 3921:
case 2550:
case 2297:
case 3568:
case 2703:
case 2111:
case 1553:
case 2309:
case 1724:
case 1031:
case 1275:
case 757:
case 3738:
case 2618:
case 185:
case 3145:
case 2866:
case 3912:
case 809:
case 240:
case 395:
case 3944:
case 1028:
case 785:
case 575:
case 3721:
case 3034:
case 3898:
case 2432:
case 547:
case 1320:
case 1161:
case 2323:
case 3773:
case 157:
case 2592:
case 3379:
case 1304:
case 1388:
case 433:
case 3653:
case 1607:
case 3091:
case 924:
case 1263:
case 3340:
case 3258:
case 2632:
case 1873:
case 2436:
case 3938:
case 0:
case 1816:
case 1924:
case 568:
case 2016:
case 2107:
case 1132:
case 1070:
case 110:
case 2880:
case 3511:
case 652:
case 1378:
case 1542:
case 3669:
case 3317:
case 455:
case 2461:
case 2545:
case 2748:
case 3522:
case 3783:
case 1546:
case 2135:
case 1136:
case 2381:
case 1899:
case 2012:
case 2661:
case 43:
case 3177:
case 2065:
case 2934:
case 1118:
case 3999:
case 1426:
case 2044:
case 3646:
case 1285:
case 336:
case 960:
case 1411:
case 2831:
case 851:
case 2254:
case 2286:
case 2625:
case 2282:
case 644:
case 1626:
case 1569:
case 3227:
case 3642:
case 3446:
case 487:
case 4087:
case 4045:
case 3983:
case 2948:
case 1611:
case 32:
case 710:
case 2277:
case 2981:
case 127:
case 2856:
case 2884:
case 4072:
case 2808:
case 1074:
case 2867:
case 3154:
case 3186:
case 1855:
case 3989:
case 743:
case 807:
case 112:
case 2852:
case 913:
case 4076:
case 2127:
case 3755:
case 596:
case 2296:
case 3558:
case 376:
case 3506:
case 369:
case 21:
case 954:
case 2250:
case 3207:
case 1606:
case 1253:
case 514:
case 1933:
case 2040:
case 1889:
case 2781:
case 143:
case 906:
case 281:
case 1402:
case 2437:
case 4060:
case 1406:
case 786:
case 569:
case 576:
case 3955:
case 2405:
case 3071:
case 1151:
case 163:
case 962:
case 2576:
case 1510:
case 2637:
case 727:
case 1778:
case 3789:
case 74:
case 3740:
case 2554:
case 254:
case 473:
case 821:
case 728:
case 2909:
case 3459:
case 1137:
case 1090:
case 2651:
case 3160:
case 101:
case 2771:
case 2106:
case 2017:
case 870:
case 2723:
case 2582:
case 1214:
case 3527:
case 1720:
case 3226:
case 3338:
case 425:
case 1324:
case 2709:
case 262:
case 701:
case 493:
case 404:
case 4086:
case 3447:
case 3113:
case 2055:
case 1427:
case 1067:
case 1056:
case 2923:
case 1084:
case 890:
case 489:
case 1008:
case 981:
case 3176:
case 206:
case 2245:
case 2219:
case 617:
case 14:
case 55:
case 128:
case 1300:
case 2264:
case 3222:
case 2294:
case 38:
case 3504:
case 3239:
case 427:
case 3588:
case 3827:
case 1130:
case 209:
case 3959:
case 3601:
case 2882:
case 1013:
case 284:
case 3167:
case 2075:
case 1885:
case 3108:
case 3156:
case 615:
case 2609:
case 337:
case 3401:
case 1727:
case 1620:
case 1181:
case 2228:
case 3759:
case 443:
case 3440:
case 3190:
case 4043:
case 77:
case 537:
case 1060:
case 1927:
case 1501:
case 3005:
case 311:
case 840:
case 2063:
case 463:
case 19:
case 2471:
case 1307:
case 1216:
case 3689:
case 2552:
case 1678:
case 972:
case 1702:
case 3369:
case 173:
case 1273:
case 538:
case 3858:
case 3806:
case 984:
case 1863:
case 789:
case 2188:
case 3143:
case 4090:
case 3493:
case 2860:
case 2059:
case 401:
case 3489:
case 383:
case 1123:
case 1478:
case 3241:
case 909:
case 704:
case 2120:
case 3975:
case 2361:
case 3298:
case 2567:
case 502:
case 3051:
case 546:
case 725:
case 2584:
case 1593:
case 366:
case 1322:
case 3200:
case 2257:
case 2266:
case 3655:
case 756:
case 4052:
case 1433:
case 2047:
case 1810:
case 2085:
case 1902:
case 1109:
case 1086:
case 104:
case 4067:
case 805:
case 346:
case 1958:
case 302:
case 4056:
case 2905:
case 4084:
case 4008:
case 2872:
case 189:
case 1633:
case 2325:
case 583:
case 44:
case 2262:
case 1326:
case 2630:
case 1589:
case 3710:
case 3578:
case 3342:
case 707:
case 3919:
case 3112:
case 3480:
case 3945:
case 4083:
case 3987:
case 3964:
case 1448:
case 2922:
case 1531:
case 3271:
case 93:
case 1337:
case 1634:
case 460:
case 1491:
case 863:
case 3680:
case 3360:
case 611:
case 2358:
case 1594:
case 2306:
case 3068:
case 3428:
case 1053:
case 2814:
case 1434:
case 1761:
case 1691:
case 3007:
case 3116:
case 987:
case 2869:
case 1095:
case 68:
case 3825:
case 1124:
case 3431:
case 3548:
case 3719:
case 827:
case 1580:
case 1961:
case 1725:
case 3534:
case 1274:
case 3209:
case 2726:
case 3376:
case 1528:
case 1845:
case 637:
case 1887:
case 315:
case 3144:
case 3494:
case 107:
case 2092:
case 288:
case 2077:
case 1864:
case 3462:
case 3022:
case 108:
case 4038:
case 2019:
case 2087:
case 226:
case 2600:
case 770:
case 580:
case 1603:
case 1267:
case 3354:
case 3529:
case 3666:
case 132:
case 602:
case 424:
case 646:
case 3382:
case 2327:
case 3777:
case 721:
case 1570:
case 3230:
case 3457:
case 1139:
case 405:
case 2907:
case 2968:
case 1042:
case 4065:
case 23:
case 3466:
case 3183:
case 4012:
case 3832:
case 790:
case 1014:
case 1736:
case 2217:
case 3670:
case 2289:
case 2191:
case 121:
case 1566:
case 2544:
case 3750:
case 2707:
case 1918:
case 801:
case 3470:
case 4073:
case 3977:
case 4016:
case 3449:
case 3836:
case 3415:
case 3992:
case 2924:
case 1083:
case 3114:
case 2080:
case 1436:
case 2741:
case 3650:
case 2263:
case 3205:
case 3343:
case 160:
case 2388:
case 89:
case 1592:
case 257:
case 2635:
case 3749:
case 3518:
case 1636:
case 2320:
case 4053:
case 2900:
case 3829:
case 2468:
case 1903:
case 2028:
case 2812:
case 1099:
case 3966:
case 1122:
case 1929:
case 318:
case 2998:
case 1857:
case 653:
case 3803:
case 3536:
case 1276:
case 3677:
case 2031:
case 649:
case 3374:
case 1213:
case 3762:
case 614:
case 2724:
case 3766:
case 2553:
case 1297:
case 1703:
case 1550:
case 760:
case 2700:
case 229:
case 1418:
case 3970:
case 1862:
case 2125:
case 676:
case 87:
case 2094:
case 1894:
case 4046:
case 3419:
case 3195:
case 408:
case 3445:
case 1948:
case 2611:
case 3731:
case 1330:
case 322:
case 1625:
case 2333:
case 1991:
case 1282:
case 1254:
case 1831:
case 3687:
case 432:
case 2739:
case 2247:
case 2622:
case 105:
case 2066:
case 635:
case 2118:
case 490:
case 3000:
case 3561:
case 4042:
case 1065:
case 2136:
case 522:
case 3834:
case 4014:
case 1135:
case 258:
case 2546:
case 724:
case 1748:
case 1564:
case 1545:
case 1587:
case 3041:
case 3390:
case 421:
case 873:
case 3780:
case 1461:
case 1734:
case 3891:
case 3728:
case 2542:
case 210:
case 3994:
case 2015:
case 1880:
case 2939:
case 2070:
case 2883:
case 176:
case 1506:
case 2394:
case 3295:
case 2767:
case 2697:
case 1755:
case 3339:
case 2413:
case 2830:
case 1989:
case 1182:
case 815:
case 1833:
case 1009:
case 3074:
case 114:
case 1154:
case 796:
case 2497:
case 2185:
case 559:
case 153:
case 2613:
case 3733:
case 2537:
case 1502:
case 2676:
case 952:
case 543:
case 2218:
case 1399:
case 2328:
case 1789:
case 753:
case 2881:
case 1235:
case 3575:
case 1071:
case 512:
case 363:
case 3151:
case 714:
case 2967:
case 2908:
case 1463:
case 944:
case 2956:
case 1023:
case 2984:
case 4005:
case 3458:
case 2088:
case 2952:
case 2159:
case 660:
case 3933:
case 1878:
case 3889:
case 2660:
case 1268:
case 1663:
case 586:
case 1793:
case 1207:
case 359:
case 2232:
case 3658:
case 1316:
case 1901:
case 3269:
case 3720:
case 2315:
case 4051:
case 1659:
case 3214:
case 2078:
case 528:
case 3840:
case 1888:
case 483:
case 3879:
case 54:
case 1321:
case 499:
case 3341:
case 2974:
case 1459:
case 3137:
case 2261:
case 3788:
case 2871:
case 735:
case 3585:
case 1081:
case 920:
case 2357:
case 3300:
case 1222:
case 2366:
case 501:
case 135:
case 1344:
case 2482:
case 2110:
case 402:
case 446:
case 624:
case 1113:
case 3067:
case 1211:
case 1485:
case 3988:
case 1030:
case 3904:
case 2454:
case 2486:
case 3052:
case 3559:
case 2225:
case 834:
case 3801:
case 3324:
case 479:
case 2377:
case 1401:
case 961:
case 1520:
case 2392:
case 137:
case 2674:
case 2782:
case 1184:
case 3847:
case 3013:
case 59:
case 1167:
case 282:
case 3097:
case 414:
case 3072:
case 1827:
case 1959:
case 274:
case 1588:
case 2396:
case 1239:
case 1504:
case 1747:
case 3540:
case 1353:
case 1679:
case 3604:
case 39:
case 78:
case 4071:
case 3368:
case 2982:
case 2291:
case 2006:
case 2117:
case 3859:
case 3420:
case 3060:
case 111:
case 3927:
case 3501:
case 203:
case 1190:
case 1947:
case 2193:
case 3335:
case 2509:
case 3181:
case 737:
case 3758:
case 3706:
case 1763:
case 3212:
case 974:
case 589:
case 3555:
case 2760:
case 2690:
case 2229:
case 45:
case 982:
case 1975:
case 3478:
case 183:
case 1489:
case 1910:
case 1241:
case 2972:
case 916:
case 621:
case 199:
case 1143:
case 2805:
case 1858:
case 3863:
case 261:
case 3273:
case 504:
case 3678:
case 3216:
case 1617:
case 3702:
case 593:
case 3326:
case 2776:
case 3238:
case 1578:
case 690:
case 2101:
case 1224:
case 2713:
case 1455:
case 903:
case 2960:
case 389:
case 2408:
case 817:
case 2456:
case 3311:
case 3958:
case 3875:
case 3086:
case 3054:
case 3433:
case 393:
case 783:
case 1655:
case 2345:
case 2387:
case 822:
case 2797:
case 2203:
case 325:
case 3265:
case 2656:
case 2684:
case 3593:
case 3322:
case 1200:
case 608:
case 2032:
case 3434:
case 3691:
case 3925:
case 2942:
case 2149:
case 896:
case 3053:
case 69:
case 2683:
case 965:
case 1121:
case 1680:
case 3305:
case 2539:
case 1360:
case 2204:
case 3243:
case 3141:
case 3634:
case 2714:
case 1223:
case 3337:
case 2483:
case 2946:
case 298:
case 1035:
case 945:
case 3198:
case 3531:
case 1271:
case 1112:
case 2036:
case 715:
case 1945:
case 2157:
case 3100:
case 3864:
case 2822:
case 1165:
case 3887:
case 1631:
case 307:
case 1494:
case 4039:
case 3961:
case 3725:
case 1313:
case 1745:
case 3580:
case 2811:
case 853:
case 2746:
case 278:
case 239:
case 1764:
case 2162:
case 2969:
case 997:
case 814:
case 1825:
case 2914:
case 1138:
case 1591:
case 3095:
case 3042:
case 2444:
case 245:
case 1026:
case 2194:
case 2953:
case 390:
case 1466:
case 3139:
case 1457:
case 3932:
case 570:
case 2465:
case 1950:
case 2025:
case 1777:
case 3570:
case 332:
case 1662:
case 1792:
case 1354:
case 3267:
case 1386:
case 134:
case 2131:
case 265:
case 604:
case 2385:
case 2795:
case 2438:
case 3892:
case 2541:
case 4024:
case 1022:
case 1462:
case 3877:
case 3046:
case 308:
case 1818:
case 2473:
case 1449:
case 1415:
case 85:
case 1281:
case 1470:
case 532:
case 2835:
case 3918:
case 1750:
case 2061:
case 2612:
case 3557:
case 2500:
case 3732:
case 590:
case 939:
case 3290:
case 2753:
case 370:
case 431:
case 321:
case 2673:
case 1649:
case 1615:
case 3562:
case 2524:
case 3736:
case 508:
case 673:
case 1183:
case 1996:
case 2807:
case 3429:
case 1832:
case 2944:
case 295:
case 2453:
case 1966:
case 3099:
case 3432:
case 811:
case 2721:
case 1450:
case 3371:
case 663:
case 1829:
case 4068:
case 2716:
case 3636:
case 1770:
case 3592:
case 223:
case 3323:
case 2841:
case 1343:
case 936:
case 3632:
case 2258:
case 2340:
case 2712:
case 1650:
case 2938:
case 3436:
case 1962:
case 3870:
case 2973:
case 1949:
case 1142:
case 1492:
case 1039:
case 1477:
case 2824:
case 3862:
case 2695:
case 1532:
case 1696:
case 1766:
case 2744:
case 3703:
case 837:
case 275:
case 2568:
case 1762:
case 686:
case 88:
case 2738:
case 1677:
case 627:
case 3866:
case 2145:
case 560:
case 3122:
case 3929:
case 3857:
case 118:
case 628:
case 802:
case 2442:
case 3044:
case 64:
case 1794:
case 236:
case 2646:
case 1308:
case 1356:
case 324:
case 1619:
case 3286:
case 3254:
case 1367:
case 3991:
case 2642:
case 879:
case 866:
case 731:
case 838:
case 66:
case 3948:
case 1024:
case 2983:
case 995:
case 3038:
case 22:
case 1195:
case 4022:
case 3168:
case 3073:
case 883:
case 1153:
case 1994:
case 2317:
case 2526:
case 967:
case 2799:
case 1891:
case 2614:
case 3461:
case 1525:
case 601:
case 3734:
case 3587:
case 1780:
case 2393:
case 1931:
case 3564:
case 3748:
case 1251:
case 899:
case 1098:
case 717:
case 3791:
case 3381:
case 3348:
case 2663:
case 2793:
case 935:
case 2268:
case 120:
case 1660:
case 3781:
case 3040:
case 494:
case 3437:
case 1952:
case 3930:
case 791:
case 381:
case 1004:
case 2463:
case 1908:
case 3890:
case 2023:
case 1967:
case 2955:
case 4006:
case 1020:
case 2071:
case 1328:
case 1881:
case 1236:
case 3576:
case 2717:
case 2502:
case 878:
case 1218:
case 771:
case 1752:
case 839:
case 3277:
case 685:
case 2675:
case 1613:
case 3292:
case 253:
case 3981:
case 1990:
case 3884:
case 482:
case 2186:
case 2993:
case 1472:
case 249:
case 1476:
case 2917:
case 2833:
case 2410:
case 3127:
case 191:
case 629:
case 416:
case 3560:
case 1767:
case 720:
case 276:
case 2558:
case 2338:
case 2226:
case 865:
case 1362:
case 1225:
case 1486:
case 2030:
case 2979:
case 996:
case 2447:
case 1033:
case 554:
case 2701:
case 845:
case 4027:
case 3923:
case 164:
case 3287:
case 2222:
case 1357:
case 2685:
case 2312:
case 2740:
case 2081:
case 2779:
case 3329:
case 1871:
case 461:
case 2459:
case 3093:
case 3102:
case 3909:
case 3651:
case 562:
case 313:
case 2888:
case 719:
case 3771:
case 2321:
case 2804:
case 2160:
case 949:
case 1078:
case 914:
case 2659:
case 3723:
case 610:
case 2373:
case 953:
case 3451:
case 1370:
case 542:
case 2527:
case 2316:
case 3228:
case 509:
case 1234:
case 1851:
case 2759:
case 194:
case 1193:
case 1986:
case 2037:
case 1002:
case 946:
case 1443:
case 2440:
case 633:
case 3751:
case 3178:
case 1291:
case 3423:
case 3280:
case 823:
case 938:
case 330:
case 2353:
case 1643:
case 1248:
case 2785:
case 2747:
case 28:
case 2588:
case 2239:
case 3543:
case 1786:
case 2152:
case 983:
case 309:
case 2827:
case 182:
case 3133:
case 3231:
case 1571:
case 3854:
case 3886:
case 1155:
case 530:
case 116:
case 2156:
case 2184:
case 2108:
case 1782:
case 1523:
case 237:
case 875:
case 1674:
case 2520:
case 592:
case 688:
case 2200:
case 1364:
case 279:
case 266:
case 1608:
case 2346:
case 1319:
case 1797:
case 1203:
case 3590:
case 1345:
case 687:
case 3266:
case 1387:
case 3047:
case 1581:
case 419:
case 444:
case 911:
case 626:
case 3876:
case 1452:
case 3937:
case 4033:
case 848:
case 246:
case 3897:
case 1484:
case 3872:
case 3905:
case 1960:
case 3262:
case 2224:
case 2775:
case 464:
case 3325:
case 2578:
case 2342:
case 2710:
case 10:
case 1652:
case 836:
case 3630:
case 761:
case 3270:
case 2369:
case 3737:
case 2689:
case 3249:
case 1490:
case 2806:
case 1140:
case 1997:
case 8:
case 3860:
case 2493:
case 299:
case 2143:
case 3188:
case 655:
case 4078:
case 1913:
case 1837:
case 3681:
case 98:
case 3705:
case 2298:
case 2763:
case 3556:
case 2693:
case 3584:
case 3842:
case 2591:
case 2138:
case 1969:
case 533:
case 2825:
case 3583:
case 2764:
case 3722:
case 178:
case 1811:
case 2719:
case 467:
case 2787:
case 2745:
case 3639:
case 2313:
case 2209:
case 2534:
case 475:
case 684:
case 3599:
case 3092:
case 1166:
case 2494:
case 3711:
case 3103:
case 2144:
case 215:
case 980:
case 3077:
case 447:
case 388:
case 798:
case 891:
case 1157:
case 1036:
case 2987:
case 2945:
case 2112:
case 2919:
case 1946:
case 3129:
case 1483:
case 1220:
case 1699:
case 2628:
case 4091:
case 2223:
case 871:
case 1288:
case 3279:
case 1363:
case 3240:
case 3911:
case 588:
case 3814:
case 1499:
case 2173:
case 1149:
case 1942:
case 2428:
case 3869:
case 2007:
case 915:
case 3498:
case 2183:
case 3148:
case 1868:
case 280:
case 1180:
case 1995:
case 1278:
case 3538:
case 3289:
case 2670:
case 3441:
case 2615:
case 3735:
case 1673:
case 587:
case 3698:
case 765:
case 3707:
case 3293:
case 2470:
case 1835:
case 2415:
case 2449:
case 3935:
case 2818:
case 3064:
case 2462:
case 1541:
case 1438:
case 3019:
case 3512:
case 3600:
case 2657:
case 1347:
case 326:
case 3255:
case 2666:
case 2386:
case 2354:
case 1131:
case 1644:
case 1233:
case 2011:
case 2662:
case 3624:
case 2792:
case 2230:
case 436:
case 1638:
case 468:
case 2777:
case 1465:
case 4003:
case 1025:
case 651:
case 3400:
case 2457:
case 2026:
case 1953:
case 1194:
case 2466:
case 33:
case 3968:
case 145:
case 3998:
case 218:
case 2496:
case 1164:
case 1145:
case 3844:
case 1119:
case 1912:
case 478:
case 931:
case 1738:
case 3210:
case 439:
case 2762:
case 167:
case 2374:
case 3275:
case 1744:
case 175:
case 2696:
case 3553:
case 2766:
case 2757:
case 1921:
case 1507:
case 3125:
case 1916:
case 1824:
case 2477:
case 557:
case 2039:
case 2492:
case 816:
case 3435:
case 4036:
case 1048:
case 3816:
case 3741:
case 803:
case 2114:
case 2650:
case 1091:
case 1206:
case 1258:
case 585:
case 3388:
case 3304:
case 1379:
case 2205:
case 3668:
case 1773:
case 2749:
case 1841:
case 1202:
case 2770:
case 1716:
case 2237:
case 3161:
case 1965:
case 2829:
case 400:
case 1453:
case 2966:
case 3812:
case 3028:
case 1944:
case 1414:
case 2834:
case 950:
case 1783:
case 1522:
case 1393:
case 768:
case 2041:
case 3259:
case 231:
case 2525:
case 3542:
case 1389:
case 1669:
case 1317:
case 1526:
case 1799:
case 3015:
case 72:
case 2994:
case 918:
case 1150:
case 3883:
case 3070:
case 841:
case 2487:
case 2980:
case 558:
case 662:
case 3422:
case 1983:
case 1196:
case 465:
case 3333:
case 510:
case 3739:
case 1355:
case 2687:
case 477:
case 1646:
case 2308:
case 168:
case 642:
case 2794:
case 3411:
case 80:
case 3285:
case 136:
case 3066:
case 217:
case 2928:
case 4025:
case 2561:
case 445:
case 3057:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1769324402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,];
var gg_b = "1769324402/";

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
