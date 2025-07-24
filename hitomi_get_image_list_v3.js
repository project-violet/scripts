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
case 3785:
case 2452:
case 2889:
case 92:
case 70:
case 2145:
case 2377:
case 3621:
case 1418:
case 3678:
case 3923:
case 1827:
case 779:
case 1551:
case 2901:
case 1399:
case 1364:
case 369:
case 3924:
case 3637:
case 2400:
case 1131:
case 1529:
case 3365:
case 2338:
case 2587:
case 3465:
case 541:
case 3240:
case 3890:
case 2906:
case 1853:
case 3957:
case 116:
case 3342:
case 837:
case 186:
case 2202:
case 3939:
case 1090:
case 3855:
case 894:
case 3276:
case 2685:
case 3703:
case 1717:
case 20:
case 120:
case 417:
case 1836:
case 2778:
case 2649:
case 49:
case 9:
case 487:
case 605:
case 1854:
case 3036:
case 1705:
case 3847:
case 1943:
case 1584:
case 1373:
case 2123:
case 3613:
case 1607:
case 732:
case 1248:
case 3801:
case 2787:
case 2025:
case 1615:
case 990:
case 3147:
case 1641:
case 3375:
case 885:
case 3945:
case 524:
case 1670:
case 3310:
case 1220:
case 3585:
case 2396:
case 2824:
case 445:
case 1886:
case 2124:
case 853:
case 2635:
case 1474:
case 3668:
case 519:
case 2872:
case 1733:
case 2990:
case 878:
case 3916:
case 4055:
case 259:
case 1422:
case 3735:
case 1322:
case 2157:
case 4090:
case 3212:
case 2172:
case 2578:
case 117:
case 3098:
case 420:
case 3019:
case 1592:
case 242:
case 1198:
case 2388:
case 2713:
case 1881:
case 307:
case 2391:
case 1898:
case 1909:
case 846:
case 3687:
case 3266:
case 1734:
case 19:
case 2491:
case 836:
case 3297:
case 730:
case 4013:
case 2645:
case 2017:
case 1160:
case 1627:
case 3121:
case 2103:
case 740:
case 3060:
case 1252:
case 2611:
case 1709:
case 389:
case 2506:
case 2005:
case 1860:
case 2218:
case 3762:
case 3572:
case 2299:
case 2914:
case 2092:
case 2755:
case 62:
case 3935:
case 1037:
case 898:
case 3716:
case 4014:
case 2104:
case 507:
case 1933:
case 3837:
case 166:
case 3826:
case 2084:
case 1744:
case 649:
case 905:
case 3690:
case 2616:
case 1026:
case 639:
case 3126:
case 801:
case 1402:
case 725:
case 2547:
case 240:
case 1654:
case 3711:
case 3789:
case 2885:
case 1450:
case 1350:
case 3493:
case 4087:
case 1743:
case 3113:
case 2448:
case 1815:
case 4021:
case 299:
case 961:
case 3230:
case 1841:
case 2555:
case 2978:
case 3015:
case 3647:
case 2034:
case 409:
case 3903:
case 4078:
case 1267:
case 2420:
case 1509:
case 3904:
case 611:
case 2959:
case 874:
case 1170:
case 3868:
case 15:
case 3739:
case 3114:
case 2274:
case 2937:
case 690:
case 3562:
case 3757:
case 1870:
case 3168:
case 1068:
case 2624:
case 1992:
case 1014:
case 950:
case 3046:
case 672:
case 3458:
case 3545:
case 3358:
case 466:
case 1146:
case 1543:
case 3606:
case 2029:
case 1544:
case 3887:
case 2701:
case 3723:
case 3949:
case 3379:
case 341:
case 893:
case 3332:
case 3985:
case 1681:
case 3432:
case 2168:
case 2772:
case 2562:
case 1536:
case 2114:
case 3624:
case 3420:
case 1461:
case 1554:
case 2739:
case 3835:
case 579:
case 3320:
case 627:
case 1133:
case 2208:
case 1553:
case 982:
case 2647:
case 2015:
case 1275:
case 2041:
case 438:
case 3590:
case 1781:
case 1134:
case 2516:
case 2903:
case 399:
case 2230:
case 177:
case 3978:
case 912:
case 3348:
case 731:
case 2332:
case 1497:
case 1466:
case 1397:
case 4049:
case 3701:
case 2479:
case 231:
case 1531:
case 46:
case 1129:
case 241:
case 2379:
case 2949:
case 2723:
case 4085:
case 800:
case 3051:
case 3222:
case 2589:
case 2724:
case 143:
case 1786:
case 3639:
case 2358:
case 3926:
case 1004:
case 532:
case 4035:
case 1265:
case 1892:
case 325:
case 1753:
case 1340:
case 691:
case 2837:
case 3968:
case 176:
case 610:
case 3914:
case 2482:
case 2859:
case 1519:
case 1192:
case 1598:
case 1644:
case 2382:
case 1105:
case 3689:
case 3803:
case 1907:
case 1817:
case 138:
case 2762:
case 1328:
case 3218:
case 1736:
case 3264:
case 1643:
case 148:
case 3005:
case 1371:
case 559:
case 2539:
case 626:
case 1941:
case 456:
case 1754:
case 3103:
case 2060:
case 1049:
case 2393:
case 2524:
case 224:
case 813:
case 3662:
case 3083:
case 3149:
case 2493:
case 340:
case 1727:
case 789:
case 3849:
case 16:
case 3987:
case 2711:
case 330:
case 3185:
case 2690:
case 1376:
case 2369:
case 2655:
case 2523:
case 2469:
case 1242:
case 2494:
case 951:
case 3124:
case 2549:
case 1024:
case 2614:
case 1931:
case 2086:
case 3496:
case 723:
case 3367:
case 1633:
case 3396:
case 2585:
case 868:
case 2261:
case 3025:
case 3787:
case 2475:
case 2801:
case 1308:
case 2375:
case 2847:
case 4011:
case 4045:
case 1023:
case 1232:
case 444:
case 1715:
case 3391:
case 4062:
case 2297:
case 3559:
case 497:
case 2081:
case 3491:
case 2019:
case 2962:
case 332:
case 3388:
case 1057:
case 84:
case 359:
case 4016:
case 3955:
case 196:
case 3839:
case 2735:
case 2212:
case 1953:
case 2806:
case 1039:
case 604:
case 4024:
case 2365:
case 3604:
case 1844:
case 1986:
case 2465:
case 2031:
case 1692:
case 926:
case 1144:
case 3300:
case 1282:
case 3044:
case 2637:
case 3400:
case 2749:
case 2678:
case 2923:
case 1089:
case 269:
case 1605:
case 991:
case 3043:
case 3811:
case 3452:
case 4023:
case 2271:
case 3111:
case 1045:
case 2621:
case 3352:
case 3947:
case 863:
case 1293:
case 3514:
case 908:
case 2535:
case 18:
case 3649:
case 769:
case 3162:
case 3568:
case 3250:
case 144:
case 1683:
case 1998:
case 1919:
case 728:
case 3685:
case 651:
case 2054:
case 1570:
case 1760:
case 3295:
case 2855:
case 496:
case 1480:
case 2704:
case 2626:
case 3202:
case 802:
case 2276:
case 1380:
case 2053:
case 4057:
case 2190:
case 4072:
case 2442:
case 3816:
case 3513:
case 3906:
case 1507:
case 2890:
case 2342:
case 2155:
case 2957:
case 3163:
case 2000:
case 385:
case 1292:
case 3331:
case 2344:
case 3431:
case 1682:
case 3597:
case 501:
case 2702:
case 3566:
case 3776:
case 2640:
case 1217:
case 3203:
case 353:
case 4073:
case 3864:
case 3908:
case 2077:
case 3899:
case 2443:
case 3199:
case 268:
case 2750:
case 1099:
case 2628:
case 3930:
case 97:
case 3285:
case 284:
case 3771:
case 3561:
case 23:
case 2409:
case 554:
case 24:
case 3249:
case 1988:
case 1693:
case 823:
case 635:
case 214:
case 909:
case 3728:
case 1283:
case 645:
case 192:
case 1548:
case 336:
case 2880:
case 346:
case 1284:
case 2180:
case 1390:
case 4022:
case 598:
case 1490:
case 3874:
case 4063:
case 763:
case 150:
case 1110:
case 3386:
case 3010:
case 828:
case 3486:
case 2096:
case 2550:
case 1074:
case 69:
case 3174:
case 687:
case 2214:
case 1810:
case 2268:
case 1900:
case 3712:
case 2964:
case 470:
case 2999:
case 2918:
case 593:
case 2213:
case 967:
case 1401:
case 2130:
case 1952:
case 1234:
case 3766:
case 4064:
case 4018:
case 2830:
case 3797:
case 3075:
case 202:
case 3319:
case 347:
case 1679:
case 3498:
case 337:
case 1632:
case 2091:
case 3540:
case 2287:
case 806:
case 3980:
case 263:
case 95:
case 1658:
case 1720:
case 3761:
case 1406:
case 3528:
case 2392:
case 1437:
case 2492:
case 1337:
case 547:
case 365:
case 1359:
case 1459:
case 1421:
case 3460:
case 700:
case 666:
case 2317:
case 288:
case 3245:
case 1321:
case 558:
case 472:
case 1:
case 2405:
case 2128:
case 1378:
case 374:
case 2305:
case 3664:
case 3699:
case 3618:
case 218:
case 3997:
case 1596:
case 411:
case 1209:
case 1752:
case 3966:
case 1777:
case 1567:
case 3850:
case 3093:
case 3150:
case 3262:
case 573:
case 3912:
case 3094:
case 2255:
case 1642:
case 1194:
case 2876:
case 2763:
case 393:
case 1738:
case 1869:
case 935:
case 841:
case 1002:
case 1894:
case 2176:
case 1326:
case 3508:
case 945:
case 3102:
case 1426:
case 3370:
case 3940:
case 2333:
case 622:
case 819:
case 2020:
case 1468:
case 3674:
case 783:
case 1368:
case 2722:
case 1314:
case 3224:
case 3928:
case 172:
case 3673:
case 2630:
case 1413:
case 3307:
case 3223:
case 3315:
case 2247:
case 3441:
case 3415:
case 546:
case 449:
case 2434:
case 99:
case 4:
case 1675:
case 987:
case 1832:
case 1179:
case 301:
case 1500:
case 3079:
case 2897:
case 65:
case 1387:
case 190:
case 585:
case 3032:
case 1132:
case 2166:
case 3346:
case 1158:
case 3976:
case 2812:
case 3446:
case 3058:
case 2902:
case 2518:
case 2599:
case 2112:
case 2774:
case 2451:
case 283:
case 2351:
case 2206:
case 3622:
case 1858:
case 2580:
case 3334:
case 2341:
case 3434:
case 2971:
case 643:
case 3630:
case 921:
case 2407:
case 2928:
case 3201:
case 3356:
case 633:
case 298:
case 3048:
case 4071:
case 4040:
case 584:
case 2674:
case 2224:
case 996:
case 254:
case 3722:
case 1335:
case 1820:
case 54:
case 2940:
case 3161:
case 2370:
case 1120:
case 1667:
case 514:
case 2470:
case 3451:
case 3774:
case 3599:
case 754:
case 3112:
case 3518:
case 3351:
case 1994:
case 1012:
case 840:
case 383:
case 568:
case 313:
case 103:
case 426:
case 656:
case 3902:
case 2239:
case 2446:
case 3197:
case 491:
case 2708:
case 355:
case 3166:
case 1281:
case 1775:
case 1097:
case 1565:
case 162:
case 3563:
case 201:
case 1219:
case 1298:
case 410:
case 98:
case 108:
case 3522:
case 2618:
case 563:
case 3305:
case 1071:
case 3317:
case 1227:
case 388:
case 91:
case 3828:
case 1304:
case 502:
case 3140:
case 2780:
case 793:
case 1040:
case 899:
case 1600:
case 4061:
case 3492:
case 3176:
case 1958:
case 1575:
case 1765:
case 648:
case 2508:
case 1253:
case 1076:
case 3255:
case 2069:
case 3484:
case 2802:
case 3763:
case 2150:
case 1349:
case 1979:
case 2093:
case 4066:
case 1236:
case 191:
case 3718:
case 2895:
case 3799:
case 180:
case 774:
case 2997:
case 657:
case 110:
case 2966:
case 300:
case 3830:
case 1215:
case 3325:
case 2576:
case 3108:
case 3502:
case 1241:
case 696:
case 171:
case 3918:
case 794:
case 3808:
case 1030:
case 737:
case 3964:
case 1779:
case 1648:
case 1323:
case 758:
case 3550:
case 1867:
case 2712:
case 2235:
case 3268:
case 3214:
case 1896:
case 1593:
case 1324:
case 1270:
case 564:
case 3595:
case 3067:
case 943:
case 621:
case 451:
case 2874:
case 1965:
case 2486:
case 3661:
case 1758:
case 395:
case 2010:
case 1372:
case 2528:
case 588:
case 1942:
case 879:
case 2980:
case 773:
case 2761:
case 2822:
case 1339:
case 3666:
case 3287:
case 2540:
case 2481:
case 247:
case 2398:
case 112:
case 3088:
case 3278:
case 2118:
case 2199:
case 3443:
case 778:
case 329:
case 2930:
case 3750:
case 253:
case 1345:
case 3052:
case 3795:
case 2899:
case 4030:
case 2908:
case 1311:
case 2427:
case 1910:
case 3259:
case 644:
case 2863:
case 2776:
case 215:
case 285:
case 746:
case 1794:
case 2431:
case 3344:
case 151:
case 3237:
case 842:
case 715:
case 2453:
case 3180:
case 1080:
case 2353:
case 2740:
case 236:
case 2042:
case 938:
case 1462:
case 2249:
case 948:
case 2650:
case 314:
case 3409:
case 2771:
case 384:
case 2285:
case 34:
case 859:
case 753:
case 75:
case 880:
case 343:
case 1639:
case 1926:
case 2146:
case 333:
case 995:
case 1672:
case 1657:
case 3412:
case 1051:
case 810:
case 1222:
case 3312:
case 430:
case 1701:
case 2544:
case 222:
case 440:
case 2288:
case 267:
case 3531:
case 3129:
case 2087:
case 3829:
case 2725:
case 4083:
case 1747:
case 826:
case 2681:
case 1273:
case 2905:
case 199:
case 767:
case 902:
case 2841:
case 1348:
case 4017:
case 3156:
case 356:
case 3625:
case 2141:
case 1034:
case 3553:
case 3134:
case 2807:
case 3275:
case 2686:
case 2267:
case 597:
case 2509:
case 1420:
case 3461:
case 3554:
case 3133:
case 25:
case 2170:
case 3361:
case 4092:
case 1274:
case 3536:
case 2870:
case 1135:
case 3035:
case 2992:
case 425:
case 2951:
case 3184:
case 688:
case 3242:
case 4051:
case 3476:
case 618:
case 2402:
case 2525:
case 1849:
case 36:
case 2495:
case 140:
case 4029:
case 3883:
case 1987:
case 2395:
case 2450:
case 1885:
case 3049:
case 3183:
case 1083:
case 929:
case 2929:
case 93:
case 3941:
case 2160:
case 3003:
case 984:
case 1645:
case 94:
case 2934:
case 499:
case 2021:
case 3915:
case 3754:
case 3471:
case 596:
case 2709:
case 2078:
case 1803:
case 3907:
case 1506:
case 3817:
case 675:
case 3428:
case 1264:
case 3736:
case 3643:
case 209:
case 3328:
case 2860:
case 1218:
case 914:
case 2631:
case 1914:
case 1092:
case 1755:
case 2200:
case 4033:
case 3192:
case 766:
case 3598:
case 125:
case 3581:
case 521:
case 3004:
case 1790:
case 3340:
case 1104:
case 3753:
case 3970:
case 3953:
case 1872:
case 3560:
case 3770:
case 2733:
case 2646:
case 804:
case 548:
case 2517:
case 3039:
case 2505:
case 159:
case 1768:
case 396:
case 2006:
case 2322:
case 1172:
case 3651:
case 1955:
case 4009:
case 321:
case 1488:
case 3629:
case 40:
case 695:
case 142:
case 2592:
case 2119:
case 1388:
case 2881:
case 1713:
case 1391:
case 2909:
case 557:
case 2898:
case 287:
case 29:
case 1559:
case 2943:
case 3656:
case 2373:
case 3023:
case 3430:
case 2607:
case 663:
case 2473:
case 1787:
case 4043:
case 3308:
case 2615:
case 79:
case 955:
case 3125:
case 1823:
case 3927:
case 4044:
case 1496:
case 913:
case 1396:
case 2886:
case 2374:
case 3024:
case 983:
case 3269:
case 2055:
case 1816:
case 216:
case 2853:
case 1737:
case 2153:
case 745:
case 286:
case 812:
case 1759:
case 3480:
case 2090:
case 556:
case 3515:
case 629:
case 459:
case 2534:
case 1685:
case 10:
case 3570:
case 1009:
case 432:
case 2533:
case 1649:
case 1162:
case 1778:
case 1568:
case 334:
case 1514:
case 918:
case 3919:
case 1111:
case 3617:
case 3045:
case 1603:
case 1889:
case 720:
case 2925:
case 900:
case 1947:
case 1377:
case 2127:
case 1145:
case 3011:
case 2499:
case 3089:
case 543:
case 2418:
case 1845:
case 1901:
case 1811:
case 2364:
case 1043:
case 3144:
case 716:
case 63:
case 3692:
case 2784:
case 2131:
case 64:
case 1044:
case 1338:
case 2831:
case 1604:
case 235:
case 1438:
case 3844:
case 871:
case 3986:
case 245:
case 4081:
case 234:
case 974:
case 2683:
case 2062:
case 244:
case 615:
case 2919:
case 3705:
case 2809:
case 3717:
case 2109:
case 3154:
case 1054:
case 2570:
case 2480:
case 965:
case 1626:
case 1939:
case 3153:
case 1053:
case 2515:
case 2507:
case 653:
case 423:
case 1442:
case 3792:
case 2269:
case 3055:
case 2684:
case 1342:
case 1957:
case 3853:
case 3556:
case 1659:
case 678:
case 522:
case 1240:
case 567:
case 3463:
case 1678:
case 1923:
case 3464:
case 3418:
case 2143:
case 3499:
case 744:
case 2089:
case 78:
case 1228:
case 3318:
case 734:
case 3399:
case 71:
case 1785:
case 2045:
case 2011:
case 1621:
case 3127:
case 4036:
case 1687:
case 3734:
case 1266:
case 3909:
case 2954:
case 1081:
case 39:
case 387:
case 1098:
case 1019:
case 2936:
case 221:
case 4054:
case 317:
case 1962:
case 673:
case 3881:
case 3198:
case 2072:
case 3505:
case 3422:
case 954:
case 3006:
case 3733:
case 3646:
case 892:
case 1916:
case 3517:
case 1503:
case 3374:
case 870:
case 3583:
case 3886:
case 1549:
case 3474:
case 3751:
case 1668:
case 1614:
case 2931:
case 1086:
case 2746:
case 637:
case 694:
case 4031:
case 3615:
case 3047:
case 1801:
case 2308:
case 2634:
case 469:
case 658:
case 2408:
case 428:
case 1375:
case 2125:
case 2656:
case 2825:
case 3473:
case 4027:
case 1613:
case 1101:
case 2023:
case 1789:
case 1393:
case 3450:
case 3929:
case 3636:
case 1493:
case 441:
case 2727:
case 953:
case 2586:
case 2609:
case 431:
case 3654:
case 3302:
case 3026:
case 3525:
case 3402:
case 2946:
case 2376:
case 2731:
case 1655:
case 985:
case 1523:
case 1394:
case 366:
case 4046:
case 881:
case 3744:
case 776:
case 2892:
case 2004:
case 2581:
case 2970:
case 1837:
case 3933:
case 3200:
case 276:
case 1482:
case 936:
case 1859:
case 1137:
case 587:
case 2598:
case 3037:
case 59:
case 2192:
case 1382:
case 946:
case 2428:
case 238:
case 3860:
case 1572:
case 3956:
case 1762:
case 309:
case 2643:
case 1539:
case 3160:
case 2003:
case 4007:
case 2805:
case 3709:
case 76:
case 2471:
case 1060:
case 3277:
case 3934:
case 2829:
case 3087:
case 2497:
case 3681:
case 1432:
case 654:
case 1187:
case 2397:
case 1985:
case 131:
case 756:
case 777:
case 367:
case 545:
case 1949:
case 3846:
case 1606:
case 1589:
case 2786:
case 233:
case 973:
case 1545:
case 1168:
case 1114:
case 2833:
case 3014:
case 3992:
case 2035:
case 2554:
case 601:
case 839:
case 3267:
case 733:
case 1070:
case 8:
case 1739:
case 1904:
case 1814:
case 3296:
case 2856:
case 1208:
case 1015:
case 2625:
case 2275:
case 1041:
case 1903:
case 3807:
case 1813:
case 3917:
case 419:
case 1516:
case 2134:
case 3815:
case 2798:
case 586:
case 3905:
case 1230:
case 947:
case 3107:
case 1601:
case 994:
case 2156:
case 3013:
case 2832:
case 2179:
case 3219:
case 362:
case 1866:
case 1563:
case 327:
case 1429:
case 3688:
case 1995:
case 290:
case 281:
case 2387:
case 1197:
case 551:
case 2132:
case 2879:
case 3097:
case 3775:
case 2552:
case 699:
case 2577:
case 3710:
case 303:
case 2796:
case 1599:
case 1451:
case 183:
case 2858:
case 86:
case 3994:
case 1161:
case 3667:
case 1333:
case 3061:
case 3435:
case 2468:
case 3982:
case 959:
case 1722:
case 3335:
case 1861:
case 272:
case 1201:
case 3542:
case 2413:
case 1630:
case 3148:
case 488:
case 1247:
case 2791:
case 2225:
case 876:
case 790:
case 781:
case 310:
case 22:
case 3510:
case 2596:
case 3385:
case 3932:
case 3254:
case 2752:
case 100:
case 625:
case 455:
case 0:
case 3979:
case 833:
case 164:
case 1718:
case 2050:
case 1383:
case 1799:
case 3449:
case 2193:
case 7:
case 749:
case 2700:
case 1255:
case 2169:
case 1573:
case 1763:
case 3575:
case 3765:
case 1290:
case 2326:
case 1680:
case 3253:
case 582:
case 2182:
case 640:
case 2588:
case 1492:
case 252:
case 1840:
case 2337:
case 3742:
case 630:
case 2920:
case 877:
case 2665:
case 1140:
case 2359:
case 3040:
case 512:
case 3404:
case 2459:
case 90:
case 2421:
case 3071:
case 4048:
case 3227:
case 3652:
case 1828:
case 72:
case 2378:
case 1405:
case 2243:
case 1305:
case 239:
case 979:
case 118:
case 999:
case 261:
case 3582:
case 3891:
case 2679:
case 2748:
case 1091:
case 2632:
case 382:
case 3191:
case 1697:
case 844:
case 3246:
case 3439:
case 163:
case 88:
case 2658:
case 3357:
case 2251:
case 3472:
case 3196:
case 2110:
case 3270:
case 250:
case 1595:
case 3167:
case 1661:
case 3758:
case 195:
case 3965:
case 1096:
case 2938:
case 3424:
case 3867:
case 2074:
case 1214:
case 2900:
case 2810:
case 3423:
case 4077:
case 4052:
case 1964:
case 371:
case 1918:
case 1999:
case 2073:
case 1808:
case 2875:
case 761:
case 2401:
case 429:
case 659:
case 2234:
case 2347:
case 1830:
case 3215:
case 3241:
case 1108:
case 1425:
case 4088:
case 13:
case 2991:
case 14:
case 402:
case 2693:
case 4091:
case 2355:
case 2548:
case 2142:
case 2694:
case 1880:
case 3316:
case 1226:
case 925:
case 3416:
case 2842:
case 821:
case 1676:
case 3080:
case 2490:
case 1000:
case 3838:
case 2865:
case 3769:
case 2292:
case 1974:
case 351:
case 2996:
case 1259:
case 205:
case 3800:
case 679:
case 3138:
case 3558:
case 3177:
case 940:
case 1671:
case 3152:
case 3975:
case 3411:
case 930:
case 1077:
case 1221:
case 3852:
case 3489:
case 2064:
case 1343:
case 2205:
case 129:
case 3390:
case 572:
case 628:
case 1453:
case 2080:
case 669:
case 1740:
case 2416:
case 3694:
case 3669:
case 751:
case 146:
case 3284:
case 3693:
case 1436:
case 178:
case 919:
case 1336:
case 3520:
case 1561:
case 437:
case 1354:
case 3991:
case 260:
case 924:
case 3064:
case 2877:
case 2852:
case 2975:
case 606:
case 760:
case 2177:
case 2152:
case 2345:
case 2558:
case 1203:
case 2260:
case 1908:
case 1899:
case 370:
case 1427:
case 2445:
case 2800:
case 2910:
case 1597:
case 1065:
case 1204:
case 511:
case 2138:
case 3967:
case 2769:
case 590:
case 4010:
case 581:
case 185:
case 251:
case 1431:
case 3063:
case 3682:
case 1122:
case 2942:
case 2472:
case 2457:
case 3306:
case 3251:
case 2246:
case 2439:
case 4042:
case 1822:
case 539:
case 3720:
case 1761:
case 436:
case 282:
case 2191:
case 552:
case 2888:
case 1381:
case 2891:
case 1319:
case 2582:
case 2188:
case 886:
case 1419:
case 3748:
case 194:
case 3679:
case 2215:
case 1873:
case 3977:
case 1576:
case 1766:
case 3447:
case 2241:
case 1075:
case 3301:
case 712:
case 3401:
case 941:
case 2323:
case 415:
case 3074:
case 2867:
case 4065:
case 3810:
case 3900:
case 1235:
case 1174:
case 2324:
case 2593:
case 350:
case 2196:
case 3233:
case 173:
case 3938:
case 2758:
case 3002:
case 2958:
case 867:
case 193:
case 3738:
case 2575:
case 3426:
case 2253:
case 2076:
case 1069:
case 226:
case 1802:
case 1912:
case 1094:
case 3700:
case 3194:
case 689:
case 3642:
case 3169:
case 1530:
case 1150:
case 928:
case 1093:
case 3193:
case 2449:
case 2236:
case 1262:
case 4032:
case 969:
case 291:
case 3596:
case 2510:
case 32:
case 1195:
case 210:
case 3752:
case 2485:
case 3777:
case 3095:
case 3567:
case 1850:
case 2932:
case 401:
case 3209:
case 780:
case 3948:
case 791:
case 85:
case 1699:
case 2028:
case 1618:
case 1664:
case 2227:
case 3421:
case 1460:
case 2403:
case 2652:
case 1360:
case 2677:
case 3321:
case 2638:
case 561:
case 3359:
case 2304:
case 165:
case 454:
case 624:
case 3920:
case 3882:
case 3459:
case 1780:
case 3182:
case 3437:
case 906:
case 2231:
case 726:
case 3244:
case 1663:
case 1082:
case 1257:
case 2012:
case 3552:
case 1976:
case 3767:
case 1346:
case 3796:
case 4094:
case 1239:
case 1058:
case 4069:
case 381:
case 1708:
case 3487:
case 2565:
case 3538:
case 1730:
case 2298:
case 3832:
case 3179:
case 3500:
case 227:
case 311:
case 2688:
case 1580:
case 1441:
case 1315:
case 3225:
case 3675:
case 1341:
case 2848:
case 1971:
case 1415:
case 2542:
case 3413:
case 1673:
case 1307:
case 198:
case 907:
case 3468:
case 2435:
case 3314:
case 1224:
case 3368:
case 2820:
case 2335:
case 4082:
case 809:
case 2286:
case 2120:
case 2061:
case 2696:
case 592:
case 1470:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753365601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,];
var gg_b = "1753365601/";

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
