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
case 3409:
case 362:
case 2416:
case 2952:
case 2249:
case 2475:
case 3499:
case 1653:
case 1129:
case 190:
case 2424:
case 1788:
case 964:
case 1184:
case 2316:
case 2917:
case 1094:
case 3473:
case 916:
case 1480:
case 724:
case 3213:
case 2634:
case 3413:
case 2698:
case 2376:
case 2289:
case 744:
case 1280:
case 660:
case 986:
case 1939:
case 669:
case 416:
case 3868:
case 2315:
case 55:
case 2820:
case 2951:
case 2608:
case 1559:
case 2415:
case 1144:
case 3688:
case 343:
case 2449:
case 728:
case 1071:
case 2531:
case 1057:
case 2476:
case 3313:
case 734:
case 1748:
case 2975:
case 798:
case 418:
case 2757:
case 130:
case 555:
case 3999:
case 312:
case 1581:
case 2771:
case 3909:
case 139:
case 400:
case 2452:
case 2317:
case 966:
case 593:
case 2417:
case 680:
case 3973:
case 2352:
case 149:
case 2277:
case 140:
case 582:
case 1153:
case 1629:
case 726:
case 2251:
case 2620:
case 3668:
case 2924:
case 2772:
case 984:
case 2108:
case 1853:
case 746:
case 2794:
case 794:
case 3913:
case 1439:
case 2430:
case 2369:
case 2217:
case 673:
case 610:
case 2252:
case 2330:
case 909:
case 3784:
case 382:
case 918:
case 2976:
case 1644:
case 3188:
case 2915:
case 1768:
case 488:
case 736:
case 2949:
case 393:
case 4039:
case 3216:
case 3969:
case 841:
case 827:
case 2313:
case 3476:
case 2209:
case 3415:
case 1290:
case 3275:
case 136:
case 1656:
case 1838:
case 3449:
case 146:
case 3349:
case 457:
case 720:
case 969:
case 3315:
case 875:
case 3820:
case 960:
case 3977:
case 1811:
case 2413:
case 831:
case 3930:
case 3755:
case 729:
case 749:
case 2473:
case 1871:
case 3316:
case 1111:
case 4090:
case 1300:
case 3120:
case 4000:
case 664:
case 2399:
case 2168:
case 3578:
case 3424:
case 1138:
case 1527:
case 3249:
case 906:
case 223:
case 3475:
case 2499:
case 1400:
case 262:
case 2020:
case 3276:
case 1029:
case 847:
case 821:
case 1734:
case 1798:
case 1104:
case 3416:
case 739:
case 3952:
case 3068:
case 3915:
case 2188:
case 128:
case 2034:
case 3351:
case 1502:
case 404:
case 600:
case 1612:
case 293:
case 891:
case 3711:
case 618:
case 3330:
case 3252:
case 1855:
case 1574:
case 1428:
case 2008:
case 3976:
case 3377:
case 3477:
case 255:
case 772:
case 3704:
case 973:
case 489:
case 1525:
case 910:
case 2848:
case 3430:
case 3217:
case 3369:
case 3772:
case 1657:
case 196:
case 3738:
case 3794:
case 3451:
case 919:
case 989:
case 1591:
case 410:
case 614:
case 3712:
case 138:
case 3808:
case 790:
case 2744:
case 3417:
case 124:
case 2148:
case 419:
case 897:
case 3771:
case 212:
case 1228:
case 1155:
case 3269:
case 3975:
case 1694:
case 1638:
case 1856:
case 87:
case 3757:
case 148:
case 2999:
case 210:
case 1208:
case 1920:
case 3749:
case 2929:
case 1543:
case 1624:
case 1117:
case 2984:
case 2839:
case 219:
case 208:
case 1298:
case 1689:
case 412:
case 300:
case 3828:
case 2264:
case 566:
case 1506:
case 993:
case 2860:
case 1616:
case 3904:
case 1675:
case 3256:
case 845:
case 3938:
case 982:
case 2353:
case 3972:
case 3690:
case 713:
case 1615:
case 2944:
case 388:
case 912:
case 2640:
case 204:
case 3912:
case 3039:
case 584:
case 493:
case 3570:
case 1169:
case 1852:
case 3255:
case 3537:
case 3128:
case 1334:
case 1595:
case 1398:
case 1676:
case 1583:
case 1498:
case 1177:
case 455:
case 289:
case 1130:
case 602:
case 3971:
case 877:
case 1790:
case 3957:
case 3060:
case 2253:
case 2028:
case 3775:
case 933:
case 2484:
case 1563:
case 3271:
case 1617:
case 3769:
case 1099:
case 2090:
case 1420:
case 251:
case 260:
case 2000:
case 1597:
case 1124:
case 3338:
case 386:
case 3535:
case 3257:
case 895:
case 2840:
case 1073:
case 3494:
case 3751:
case 1175:
case 423:
case 3190:
case 3472:
case 1815:
case 368:
case 3100:
case 45:
case 742:
case 943:
case 1652:
case 586:
case 923:
case 1669:
case 3204:
case 722:
case 3717:
case 1176:
case 3800:
case 962:
case 3890:
case 3272:
case 1115:
case 2140:
case 3357:
case 1149:
case 3294:
case 316:
case 257:
case 178:
case 2344:
case 1651:
case 2880:
case 3040:
case 3799:
case 2356:
case 1069:
case 778:
case 2775:
case 1388:
case 1593:
case 703:
case 1503:
case 3364:
case 389:
case 3139:
case 3709:
case 2971:
case 2570:
case 3160:
case 2537:
case 3464:
case 122:
case 2724:
case 508:
case 3944:
case 1077:
case 519:
case 3640:
case 2039:
case 612:
case 4048:
case 2938:
case 2994:
case 2256:
case 3353:
case 2972:
case 693:
case 3264:
case 1609:
case 2455:
case 2828:
case 1348:
case 1586:
case 284:
case 1673:
case 3839:
case 504:
case 2355:
case 319:
case 132:
case 3680:
case 2911:
case 310:
case 373:
case 3929:
case 1740:
case 2715:
case 1052:
case 655:
case 2536:
case 1113:
case 2211:
case 2471:
case 2040:
case 264:
case 1049:
case 3639:
case 2312:
case 3344:
case 3229:
case 1547:
case 1076:
case 2272:
case 1988:
case 3444:
case 2890:
case 65:
case 2238:
case 2294:
case 3140:
case 623:
case 2717:
case 2800:
case 2628:
case 551:
case 2100:
case 2311:
case 192:
case 2404:
case 1587:
case 1024:
case 2494:
case 3244:
case 268:
case 3429:
case 1468:
case 2257:
case 2535:
case 1016:
case 286:
case 2338:
case 1948:
case 1075:
case 2304:
case 2271:
case 3180:
case 2769:
case 2411:
case 633:
case 1760:
case 369:
case 3090:
case 2136:
case 2706:
case 195:
case 1667:
case 3461:
case 1054:
case 256:
case 3941:
case 1693:
case 3359:
case 1147:
case 381:
case 3459:
case 2743:
case 3262:
case 1865:
case 2902:
case 2227:
case 3833:
case 587:
case 3361:
case 207:
case 1679:
case 1166:
case 2974:
case 2637:
case 2722:
case 3942:
case 2500:
case 201:
case 2610:
case 3981:
case 1619:
case 1187:
case 3767:
case 3133:
case 2427:
case 3785:
case 2590:
case 1599:
case 803:
case 40:
case 3362:
case 665:
case 2135:
case 2705:
case 2795:
case 2783:
case 3261:
case 3580:
case 2658:
case 3482:
case 367:
case 2302:
case 1647:
case 3765:
case 1185:
case 2291:
case 3787:
case 145:
case 2392:
case 254:
case 876:
case 3961:
case 3560:
case 1179:
case 2492:
case 2170:
case 1845:
case 561:
case 3242:
case 2474:
case 3281:
case 2763:
case 1666:
case 135:
case 1146:
case 405:
case 3341:
case 171:
case 3382:
case 1665:
case 2202:
case 2927:
case 3747:
case 3223:
case 177:
case 2391:
case 3058:
case 3962:
case 905:
case 1119:
case 2110:
case 19:
case 2274:
case 567:
case 3633:
case 2292:
case 3766:
case 1096:
case 2314:
case 2225:
case 2158:
case 125:
case 3381:
case 1867:
case 2754:
case 1885:
case 361:
case 2426:
case 2635:
case 1006:
case 3282:
case 1737:
case 1065:
case 3783:
case 1163:
case 2779:
case 3901:
case 813:
case 3991:
case 3033:
case 507:
case 3705:
case 3926:
case 3327:
case 2746:
case 3135:
case 777:
case 3427:
case 1378:
case 1575:
case 2785:
case 3590:
case 1332:
case 98:
case 2942:
case 4032:
case 41:
case 2703:
case 3992:
case 307:
case 2361:
case 1576:
case 3637:
case 3974:
case 3743:
case 91:
case 2923:
case 1605:
case 2459:
case 2036:
case 2262:
case 1318:
case 1154:
case 1549:
case 2540:
case 3902:
case 217:
case 3835:
case 892:
case 356:
case 4031:
case 2982:
case 2359:
case 3136:
case 4050:
case 1710:
case 2461:
case 1863:
case 60:
case 250:
case 1019:
case 1045:
case 1978:
case 1663:
case 1517:
case 73:
case 2766:
case 3158:
case 3401:
case 863:
case 2342:
case 2481:
case 1883:
case 1895:
case 3837:
case 3301:
case 605:
case 1106:
case 1736:
case 3870:
case 74:
case 1196:
case 2747:
case 3326:
case 3202:
case 1086:
case 358:
case 1805:
case 1121:
case 2962:
case 3391:
case 3797:
case 1003:
case 96:
case 2423:
case 1105:
case 2341:
case 2382:
case 1896:
case 1654:
case 3170:
case 72:
case 1569:
case 1931:
case 3214:
case 1093:
case 2242:
case 3137:
case 3528:
case 415:
case 2787:
case 1577:
case 3374:
case 3858:
case 3636:
case 3201:
case 558:
case 1122:
case 2961:
case 354:
case 3392:
case 1079:
case 3302:
case 842:
case 267:
case 1551:
case 2323:
case 985:
case 1918:
case 2765:
case 2393:
case 3405:
case 3650:
case 1732:
case 2245:
case 3206:
case 658:
case 2303:
case 1174:
case 1437:
case 2367:
case 2966:
case 2219:
case 3483:
case 3495:
case 215:
case 3383:
case 2467:
case 961:
case 3534:
case 3395:
case 1023:
case 3598:
case 1125:
case 1337:
case 1936:
case 830:
case 1370:
case 2286:
case 1826:
case 721:
case 4070:
case 3305:
case 3727:
case 2947:
case 1891:
case 3618:
case 2493:
case 4037:
case 2293:
case 2285:
case 3632:
case 4010:
case 741:
case 1126:
case 1750:
case 3396:
case 3678:
case 3963:
case 2345:
case 1825:
case 505:
case 459:
case 2203:
case 2267:
case 2319:
case 1410:
case 775:
case 3283:
case 2761:
case 1358:
case 1555:
case 1237:
case 3406:
case 2445:
case 2987:
case 2386:
case 2279:
case 829:
case 3496:
case 1627:
case 3205:
case 4058:
case 3131:
case 2979:
case 28:
case 2466:
case 50:
case 1336:
case 1674:
case 2347:
case 3726:
case 4036:
case 1602:
case 1827:
case 1235:
case 417:
case 3354:
case 3878:
case 3118:
case 2447:
case 797:
case 3832:
case 3714:
case 2903:
case 1059:
case 77:
case 2967:
case 265:
case 3263:
case 987:
case 3207:
case 2387:
case 3463:
case 981:
case 3792:
case 656:
case 1236:
case 1601:
case 1958:
case 3702:
case 30:
case 2247:
case 1691:
case 2568:
case 3943:
case 1127:
case 1594:
case 3397:
case 2465:
case 3254:
case 607:
case 1572:
case 2782:
case 872:
case 2741:
case 2032:
case 1910:
case 1504:
case 3363:
case 3725:
case 2945:
case 3906:
case 2078:
case 2496:
case 844:
case 515:
case 3761:
case 2283:
case 352:
case 2295:
case 1142:
case 1091:
case 3445:
case 2406:
case 1933:
case 3987:
case 828:
case 2222:
case 3345:
case 2306:
case 3319:
case 385:
case 834:
case 954:
case 3759:
case 1841:
case 1014:
case 3762:
case 197:
case 3346:
case 2727:
case 56:
case 3485:
case 2598:
case 2383:
case 315:
case 3403:
case 3286:
case 1661:
case 848:
case 838:
case 3245:
case 2322:
case 3303:
case 2483:
case 3219:
case 958:
case 1025:
case 3385:
case 3446:
case 2221:
case 2650:
case 824:
case 1659:
case 31:
case 3919:
case 3266:
case 3032:
case 2363:
case 175:
case 3078:
case 2906:
case 3945:
case 2725:
case 2254:
case 2397:
case 3782:
case 3741:
case 1859:
case 131:
case 2850:
case 894:
case 3247:
case 2132:
case 1529:
case 2702:
case 141:
case 2520:
case 58:
case 2818:
case 3568:
case 4033:
case 2178:
case 2943:
case 3723:
case 2407:
case 681:
case 1584:
case 1861:
case 956:
case 2792:
case 836:
case 617:
case 3903:
case 365:
case 3366:
case 3967:
case 898:
case 2263:
case 611:
case 3742:
case 2207:
case 147:
case 1641:
case 1682:
case 2297:
case 2878:
case 2118:
case 51:
case 1623:
case 2905:
case 2726:
case 2150:
case 3347:
case 3946:
case 1544:
case 2791:
case 3265:
case 2454:
case 137:
case 2701:
case 3979:
case 3466:
case 3018:
case 3052:
case 2624:
case 2543:
case 944:
case 2208:
case 2920:
case 1453:
case 1929:
case 173:
case 522:
case 2298:
case 2234:
case 1984:
case 2117:
case 3673:
case 424:
case 996:
case 1860:
case 2869:
case 3545:
case 2506:
case 4053:
case 3699:
case 2521:
case 934:
case 2675:
case 2596:
case 3030:
case 363:
case 104:
case 639:
case 428:
case 2505:
case 3077:
case 3051:
case 948:
case 1464:
case 1160:
case 434:
case 3780:
case 2169:
case 2817:
case 2700:
case 1139:
case 3503:
case 3613:
case 2177:
case 938:
case 3567:
case 764:
case 542:
case 1028:
case 180:
case 3388:
case 2151:
case 2408:
case 649:
case 496:
case 169:
case 2189:
case 3760:
case 1180:
case 2617:
case 3173:
case 3948:
case 2728:
case 994:
case 579:
case 426:
case 1000:
case 1953:
case 2320:
case 3089:
case 1244:
case 3199:
case 3368:
case 4084:
case 3565:
case 1840:
case 718:
case 700:
case 1533:
case 3024:
case 936:
case 3587:
case 856:
case 4029:
case 2876:
case 3809:
case 2816:
case 1140:
case 2875:
case 370:
case 3988:
case 2013:
case 3076:
case 2908:
case 2220:
case 3547:
case 1229:
case 1344:
case 592:
case 699:
case 801:
case 1639:
case 203:
case 2630:
case 3873:
case 690:
case 926:
case 714:
case 3113:
case 1880:
case 2934:
case 3015:
case 624:
case 757:
case 3408:
case 1060:
case 1356:
case 1957:
case 2069:
case 3790:
case 1971:
case 114:
case 3700:
case 940:
case 429:
case 2567:
case 706:
case 3398:
case 3676:
case 3595:
case 222:
case 3334:
case 1537:
case 1255:
case 850:
case 3169:
case 1570:
case 2579:
case 861:
case 263:
case 1039:
case 1912:
case 3649:
case 188:
case 3505:
case 2546:
case 1690:
case 2699:
case 1972:
case 118:
case 376:
case 1256:
case 3869:
case 3616:
case 1904:
case 3506:
case 628:
case 2348:
case 2545:
case 2609:
case 1455:
case 100:
case 439:
case 867:
case 3689:
case 1911:
case 3877:
case 449:
case 696:
case 920:
case 769:
case 2586:
case 184:
case 3117:
case 2968:
case 1715:
case 760:
case 3624:
case 751:
case 644:
case 303:
case 164:
case 2873:
case 3998:
case 3677:
case 626:
case 2015:
case 574:
case 2268:
case 378:
case 116:
case 1238:
case 1294:
case 270:
case 3875:
case 3554:
case 213:
case 2899:
case 2988:
case 1272:
case 1890:
case 704:
case 1628:
case 2566:
case 1717:
case 811:
case 1371:
case 3669:
case 1204:
case 698:
case 279:
case 2024:
case 3116:
case 881:
case 1311:
case 3876:
case 374:
case 1730:
case 2109:
case 3320:
case 1080:
case 168:
case 3815:
case 1190:
case 3175:
case 2368:
case 1751:
case 1494:
case 1438:
case 1257:
case 2016:
case 4004:
case 3124:
case 773:
case 2468:
case 499:
case 646:
case 4072:
case 1769:
case 2813:
case 1411:
case 1271:
case 3563:
case 2948:
case 2075:
case 719:
case 1068:
case 4024:
case 1276:
case 3400:
case 1215:
case 2562:
case 1324:
case 3084:
case 1249:
case 3194:
case 3527:
case 3138:
case 4016:
case 1375:
case 1424:
case 1578:
case 3390:
case 1756:
case 1120:
case 603:
case 299:
case 678:
case 2072:
case 3111:
case 1489:
case 3871:
case 1917:
case 2094:
case 536:
case 2184:
case 4075:
case 2884:
case 1930:
case 2012:
case 2939:
case 272:
case 394:
case 4049:
case 1289:
case 1376:
case 1349:
case 81:
case 2340:
case 3656:
case 3894:
case 2440:
case 674:
case 413:
case 3872:
case 3290:
case 793:
case 1415:
case 2144:
case 2559:
case 992:
case 2748:
case 3200:
case 782:
case 2960:
case 1216:
case 983:
case 1531:
case 723:
case 348:
case 4017:
case 1975:
case 762:
case 1317:
case 75:
case 963:
case 2864:
case 3228:
case 442:
case 1834:
case 1898:
case 3611:
case 3501:
case 249:
case 1352:
case 1230:
case 324:
case 4052:
case 1924:
case 2629:
case 1251:
case 102:
case 1620:
case 1712:
case 240:
case 3064:
case 932:
case 1108:
case 1451:
case 2853:
case 396:
case 2582:
case 1772:
case 1369:
case 1217:
case 344:
case 2439:
case 1430:
case 3328:
case 1088:
case 1134:
case 1976:
case 4051:
case 422:
case 3574:
case 2164:
case 2339:
case 1252:
case 1711:
case 1469:
case 2460:
case 524:
case 3502:
case 3720:
case 1949:
case 4077:
case 942:
case 1351:
case 328:
case 3664:
case 3960:
case 2804:
case 3057:
case 3071:
case 236:
case 2894:
case 2656:
case 143:
case 2112:
case 1299:
case 2872:
case 4013:
case 974:
case 599:
case 2157:
case 3939:
case 403:
case 2171:
case 2811:
case 1413:
case 2044:
case 1309:
case 399:
case 1213:
case 3480:
case 2111:
case 3038:
case 3094:
case 2871:
case 1764:
case 1648:
case 1168:
case 3788:
case 903:
case 4009:
case 3129:
case 298:
case 679:
case 3844:
case 3562:
case 2084:
case 572:
case 2138:
case 2527:
case 2194:
case 2708:
case 3240:
case 2734:
case 162:
case 15:
case 670:
case 474:
case 2029:
case 3380:
case 2612:
case 1729:
case 2156:
case 3940:
case 228:
case 1034:
case 3523:
case 1098:
case 3768:
case 1188:
case 3644:
case 3164:
case 1784:
case 2574:
case 2855:
case 3460:
case 2592:
case 3056:
case 244:
case 1848:
case 2525:
case 530:
case 155:
case 320:
case 3853:
case 3541:
case 2657:
case 632:
case 3582:
case 1668:
case 3055:
case 2591:
case 2611:
case 349:
case 2501:
case 3684:
case 1973:
case 224:
case 2604:
case 3260:
case 2514:
case 2900:
case 663:
case 112:
case 520:
case 1999:
case 2990:
case 248:
case 2638:
case 69:
case 2556:
case 2732:
case 3659:
case 3123:
case 1588:
case 4003:
case 1367:
case 3881:
case 1219:
case 2210:
case 2174:
case 591:
case 3564:
case 1245:
case 677:
case 2082:
case 2470:
case 802:
case 1479:
case 2370:
case 3661:
case 1286:
case 2801:
case 2125:
case 1403:
case 2337:
case 2258:
case 115:
case 2023:
case 1485:
case 3074:
case 1493:
case 1346:
case 1947:
case 2826:
case 4079:
case 3141:
case 397:
case 3182:
case 1762:
case 3014:
case 70:
case 2750:
case 1759:
case 4019:
case 3553:
case 1293:
case 185:
case 1267:
case 2825:
case 2101:
case 2731:
case 1345:
case 1279:
case 1987:
case 1386:
case 2270:
case 597:
case 2358:
case 2874:
case 2237:
case 2410:
case 152:
case 1419:
case 1761:
case 2802:
case 2627:
case 2718:
case 635:
case 1018:
case 1466:
case 1287:
case 2970:
case 3233:
case 337:
case 2061:
case 2827:
case 1265:
case 3862:
case 3544:
case 1347:
case 1946:
case 3159:
case 3623:
case 4066:
case 1447:
case 1993:
case 1985:
case 1031:
case 575:
case 347:
case 1742:
case 1781:
case 3161:
case 1967:
case 1366:
case 165:
case 2236:
case 2958:
case 2511:
case 3861:
case 3584:
case 4065:
case 3333:
case 327:
case 695:
case 1568:
case 2691:
case 341:
case 3529:
case 1247:
case 3859:
case 1741:
case 2572:
case 1782:
case 62:
case 1465:
case 2538:
case 2335:
case 2614:
case 547:
case 2504:
case 1487:
case 653:
case 2910:
case 11:
case 2001:
case 2662:
case 1205:
case 1421:
case 2823:
case 3627:
case 3802:
case 855:
case 1496:
case 3270:
case 4043:
case 1406:
case 2933:
case 2142:
case 3237:
case 2091:
case 3358:
case 2181:
case 425:
case 3310:
case 3731:
case 893:
case 3458:
case 1222:
case 1306:
case 1907:
case 1963:
case 1997:
case 1678:
case 2841:
case 3750:
case 3126:
case 3935:
case 291:
case 2553:
case 1321:
case 945:
case 2074:
case 3891:
case 1618:
case 4083:
case 925:
case 1727:
case 4095:
case 297:
case 812:
case 3826:
case 27:
case 3370:
case 1422:
case 3337:
case 3936:
case 1598:
case 1534:
case 445:
case 3210:
case 1495:
case 1483:
case 435:
case 977:
case 2564:
case 3437:
case 3082:
case 1206:
case 1322:
case 3192:
case 78:
case 3470:
case 3041:
case 4022:
case 3732:
case 3102:
case 471:
case 105:
case 2123:
case 1405:
case 2025:
case 3778:
case 2433:
case 1906:
case 953:
case 1725:
case 1363:
case 76:
case 752:
case 275:
case 833:
case 2642:
case 1921:
case 2859:
case 92:
case 2162:
case 3572:
case 1254:
case 4007:
case 1397:
case 3594:
case 3538:
case 4063:
case 227:
case 1943:
case 1178:
case 1702:
case 241:
case 3958:
case 3601:
case 3236:
case 43:
case 3511:
case 1463:
case 2027:
case 785:
case 2333:
case 1407:
case 1922:
case 4054:
case 1207:
case 715:
case 3571:
case 3059:
case 823:
case 1714:
case 1832:
case 93:
case 1297:
case 2682:
case 862:
case 3235:
case 2641:
case 3827:
case 3061:
case 237:
case 1791:
case 3512:
case 1454:
case 2544:
case 2862:
case 2623:
case 1726:
case 3674:
case 1983:
case 42:
case 3692:
case 2233:
case 3807:
case 3622:
case 927:
case 3863:
case 3710:
case 1925:
case 1706:
case 767:
case 3350:
case 2685:
case 2693:
case 156:
case 1721:
case 447:
case 1902:
case 975:
case 437:
case 253:
case 2865:
case 3515:
case 3450:
case 2646:
case 1974:
case 2166:
case 3047:
case 3695:
case 931:
case 22:
case 2887:
case 2679:
case 1992:
case 3758:
case 1914:
case 2645:
case 3231:
case 2187:
case 3516:
case 937:
case 101:
case 1610:
case 2509:
case 1722:
case 3621:
case 431:
case 1590:
case 2165:
case 761:
case 427:
case 1926:
case 3643:
case 750:
case 3478:
case 3218:
case 441:
case 1658:
case 23:
case 921:
case 3770:
case 2686:
case 3163:
case 947:
case 759:
case 3107:
case 3065:
case 3918:
case 2185:
case 2647:
case 717:
case 781:
case 1302:
case 4092:
case 47:
case 154:
case 3530:
case 3122:
case 1636:
case 1374:
case 1425:
case 3046:
case 245:
case 1763:
case 2666:
case 3183:
case 3085:
case 1707:
case 1528:
case 1137:
case 2845:
case 810:
case 1492:
case 2179:
case 819:
case 2022:
case 3735:
case 4025:
case 1797:
case 2846:
case 3121:
case 277:
case 1202:
case 1326:
case 3196:
case 889:
case 2879:
case 1870:
case 2043:
case 2145:
case 1414:
case 1274:
case 3895:
case 2119:
case 3883:
case 1110:
case 29:
case 804:
case 2867:
case 1401:
case 1314:
case 3822:
case 997:
case 3663:
case 3978:
case 3045:
case 97:
case 3143:
case 1426:
case 1635:
case 491:
case 3932:
case 3019:
case 2893:
case 1491:
case 4062:
case 1580:
case 3573:
case 2163:
case 3686:
case 621:
case 2737:
case 187:
case 2478:
case 2197:
case 1362:
case 2218:
case 111:
case 864:
case 2621:
case 2250:
case 2378:
case 2696:
case 2854:
case 2575:
case 3165:
case 3097:
case 1035:
case 3187:
case 816:
case 1942:
case 1786:
case 3166:
case 3679:
case 1361:
case 1833:
case 353:
case 53:
case 2515:
case 1262:
case 3646:
case 2450:
case 1459:
case 3147:
case 1359:
case 2897:
case 1982:
case 3054:
case 2807:
case 2710:
case 1461:
case 1719:
case 868:
case 754:
case 395:
case 1745:
case 3603:
case 2978:
case 2697:
case 3006:
case 2143:
case 2019:
case 2932:
case 4081:
case 3885:
case 4042:
case 150:
case 67:
case 3021:
case 325:
case 3803:
case 2607:
case 571:
case 2663:
case 3186:
case 3687:
case 2552:
case 1633:
case 2736:
case 1442:
case 1481:
case 39:
case 3119:
case 2895:
case 1962:
case 1058:
case 545:
case 2805:
case 3846:
case 1747:
case 2086:
case 2896:
case 3022:
case 371:
case 1341:
case 1959:
case 2105:
case 2950:
case 3146:
case 525:
case 2003:
case 335:
case 2195:
case 8:
case 3819:
case 2093:
case 1242:
case 2085:
case 2806:
case 4082:
case 2569:
case 3179:
case 818:
case 3886:
case 691:
case 2122:
case 809:
case 1539:
case 2530:
case 345:
case 3185:
case 3193:
case 1765:
case 2551:
case 3095:
case 756:
case 2079:
case 1070:
case 167:
case 1441:
case 1482:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748293202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,];
var gg_b = "1748293202/";

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
