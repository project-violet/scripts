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
case 116:
case 967:
case 3532:
case 1857:
case 1210:
case 3285:
case 2678:
case 1864:
case 1082:
case 2106:
case 786:
case 3312:
case 2550:
case 2437:
case 108:
case 2924:
case 3990:
case 2988:
case 55:
case 331:
case 2211:
case 2840:
case 1600:
case 2977:
case 1234:
case 658:
case 3125:
case 1551:
case 998:
case 270:
case 2803:
case 3970:
case 3489:
case 3847:
case 1643:
case 4036:
case 2452:
case 713:
case 1733:
case 183:
case 3430:
case 2674:
case 1766:
case 3851:
case 2616:
case 2997:
case 102:
case 3476:
case 300:
case 3557:
case 2583:
case 2984:
case 3414:
case 969:
case 3639:
case 1238:
case 3963:
case 816:
case 3749:
case 3680:
case 2358:
case 3185:
case 1110:
case 3240:
case 408:
case 2412:
case 3704:
case 2091:
case 2505:
case 2562:
case 2329:
case 1724:
case 3811:
case 568:
case 1788:
case 2396:
case 1886:
case 1448:
case 647:
case 34:
case 536:
case 1090:
case 3467:
case 3672:
case 953:
case 4082:
case 2885:
case 2318:
case 1879:
case 1395:
case 3526:
case 693:
case 241:
case 2460:
case 649:
case 2330:
case 599:
case 1250:
case 834:
case 3771:
case 3708:
case 2510:
case 1728:
case 3692:
case 2534:
case 1331:
case 3458:
case 744:
case 1063:
case 190:
case 2247:
case 4022:
case 3203:
case 392:
case 2071:
case 2669:
case 2314:
case 1720:
case 2682:
case 1852:
case 3326:
case 946:
case 297:
case 3537:
case 556:
case 3875:
case 3399:
case 604:
case 1258:
case 3317:
case 236:
case 3261:
case 2338:
case 2000:
case 709:
case 82:
case 11:
case 2362:
case 3148:
case 1094:
case 2529:
case 1542:
case 715:
case 185:
case 268:
case 1753:
case 3450:
case 78:
case 3831:
case 1167:
case 3483:
case 2457:
case 1074:
case 3386:
case 2913:
case 2809:
case 1649:
case 885:
case 3842:
case 3081:
case 481:
case 2992:
case 12:
case 1254:
case 355:
case 2464:
case 1531:
case 299:
case 1158:
case 2310:
case 3552:
case 2781:
case 2589:
case 854:
case 3161:
case 1575:
case 3633:
case 1098:
case 2015:
case 262:
case 3969:
case 384:
case 3743:
case 2530:
case 2945:
case 2953:
case 3987:
case 2417:
case 41:
case 25:
case 3755:
case 3109:
case 1351:
case 2554:
case 346:
case 4094:
case 638:
case 1860:
case 2231:
case 333:
case 2142:
case 1214:
case 2323:
case 2426:
case 1347:
case 3901:
case 1276:
case 721:
case 3978:
case 4001:
case 2195:
case 3512:
case 3688:
case 2055:
case 2861:
case 1425:
case 3994:
case 3593:
case 1873:
case 177:
case 3046:
case 3927:
case 2175:
case 3364:
case 632:
case 1189:
case 224:
case 1907:
case 2670:
case 877:
case 1745:
case 2295:
case 3697:
case 179:
case 2486:
case 545:
case 1981:
case 1635:
case 1130:
case 3573:
case 3684:
case 4074:
case 3628:
case 4016:
case 711:
case 2848:
case 1713:
case 2980:
case 3998:
case 3410:
case 42:
case 2479:
case 1296:
case 2663:
case 984:
case 2242:
case 4027:
case 920:
case 3938:
case 396:
case 2865:
case 2802:
case 2917:
case 3487:
case 2191:
case 2271:
case 63:
case 3478:
case 2208:
case 2999:
case 1023:
case 1732:
case 1421:
case 2926:
case 418:
case 1866:
case 2104:
case 3637:
case 173:
case 1050:
case 566:
case 1833:
case 3751:
case 1355:
case 3747:
case 3905:
case 3962:
case 280:
case 961:
case 4038:
case 1170:
case 2740:
case 2689:
case 4010:
case 3427:
case 873:
case 1083:
case 252:
case 2986:
case 3416:
case 595:
case 1764:
case 3345:
case 2108:
case 1741:
case 2439:
case 776:
case 1549:
case 670:
case 3040:
case 428:
case 1631:
case 910:
case 1163:
case 2291:
case 339:
case 365:
case 2979:
case 4034:
case 2480:
case 1985:
case 1504:
case 2301:
case 247:
case 473:
case 3524:
case 3612:
case 122:
case 2725:
case 812:
case 3923:
case 1182:
case 937:
case 464:
case 3577:
case 293:
case 3693:
case 3456:
case 2387:
case 788:
case 3025:
case 3706:
case 3871:
case 1799:
case 2932:
case 1591:
case 1005:
case 1062:
case 3320:
case 3202:
case 3265:
case 2472:
case 4023:
case 1222:
case 1717:
case 828:
case 118:
case 3950:
case 3165:
case 2413:
case 3983:
case 3891:
case 3528:
case 703:
case 2941:
case 2492:
case 2570:
case 3519:
case 3085:
case 3804:
case 1786:
case 2658:
case 1824:
case 965:
case 2623:
case 489:
case 3482:
case 2807:
case 374:
case 1156:
case 1651:
case 2594:
case 2993:
case 363:
case 668:
case 4054:
case 3009:
case 1096:
case 40:
case 3553:
case 2587:
case 39:
case 204:
case 3954:
case 547:
case 3388:
case 1880:
case 2709:
case 291:
case 348:
case 2155:
case 643:
case 2095:
case 1018:
case 2501:
case 3742:
case 593:
case 549:
case 3422:
case 3397:
case 1853:
case 3657:
case 699:
case 1465:
case 1402:
case 2960:
case 1335:
case 3580:
case 8:
case 3319:
case 2370:
case 662:
case 3664:
case 3958:
case 1256:
case 2031:
case 2336:
case 1543:
case 2433:
case 2466:
case 487:
case 1944:
case 2516:
case 342:
case 1169:
case 3384:
case 1752:
case 1371:
case 2574:
case 3775:
case 140:
case 1014:
case 2973:
case 171:
case 3617:
case 3929:
case 4:
case 2638:
case 3626:
case 614:
case 1555:
case 2382:
case 3699:
case 1178:
case 580:
case 1216:
case 3490:
case 3918:
case 99:
case 1793:
case 189:
case 238:
case 1274:
case 357:
case 2937:
case 1194:
case 3048:
case 1712:
case 558:
case 1227:
case 948:
case 4029:
case 2243:
case 2100:
case 719:
case 10:
case 2477:
case 2662:
case 2605:
case 359:
case 3989:
case 2200:
case 729:
case 2419:
case 3470:
case 80:
case 187:
case 1116:
case 2322:
case 2497:
case 3181:
case 3686:
case 2761:
case 440:
case 1174:
case 2744:
case 4014:
case 3930:
case 2428:
case 475:
case 3914:
case 2484:
case 1201:
case 1287:
case 3679:
case 871:
case 3592:
case 942:
case 2115:
case 3436:
case 1760:
case 3366:
case 3463:
case 1872:
case 3682:
case 4072:
case 1794:
case 3518:
case 397:
case 779:
case 2021:
case 2399:
case 2659:
case 2317:
case 598:
case 1193:
case 1451:
case 1053:
case 336:
case 648:
case 2244:
case 3721:
case 1814:
case 425:
case 674:
case 3596:
case 3362:
case 2148:
case 1701:
case 1876:
case 3432:
case 368:
case 1787:
case 821:
case 407:
case 2450:
case 111:
case 1260:
case 2831:
case 914:
case 1896:
case 48:
case 3809:
case 2386:
case 3622:
case 3514:
case 4045:
case 2715:
case 1160:
case 1829:
case 1602:
case 1665:
case 3576:
case 924:
case 3043:
case 255:
case 415:
case 3464:
case 2248:
case 3441:
case 777:
case 399:
case 2552:
case 3589:
case 4092:
case 2666:
case 2633:
case 3015:
case 2144:
case 362:
case 1727:
case 2969:
case 4013:
case 2743:
case 1173:
case 3530:
case 815:
case 657:
case 35:
case 2109:
case 3554:
case 125:
case 246:
case 4020:
case 809:
case 2368:
case 107:
case 411:
case 2901:
case 943:
case 1303:
case 3499:
case 553:
case 2978:
case 1072:
case 3195:
case 1756:
case 3350:
case 2512:
case 1858:
case 2688:
case 3844:
case 2994:
case 1252:
case 2677:
case 2405:
case 1900:
case 4053:
case 3275:
case 2046:
case 3558:
case 1769:
case 3175:
case 1561:
case 2434:
case 324:
case 3295:
case 3383:
case 2357:
case 2974:
case 1854:
case 18:
case 999:
case 421:
case 1045:
case 807:
case 3746:
case 2560:
case 785:
case 3848:
case 1340:
case 3980:
case 2998:
case 115:
case 1915:
case 2410:
case 3663:
case 3242:
case 3131:
case 2429:
case 1991:
case 1117:
case 3687:
case 2653:
case 1883:
case 2393:
case 4077:
case 2285:
case 4088:
case 3678:
case 3106:
case 3601:
case 3550:
case 3437:
case 1904:
case 956:
case 3367:
case 696:
case 1286:
case 3924:
case 1495:
case 2990:
case 790:
case 3988:
case 3211:
case 231:
case 413:
case 144:
case 551:
case 1782:
case 2620:
case 33:
case 3694:
case 3803:
case 370:
case 1475:
case 2489:
case 2847:
case 1823:
case 3452:
case 3049:
case 2360:
case 639:
case 3674:
case 2430:
case 1935:
case 2851:
case 1681:
case 1186:
case 3111:
case 1971:
case 3206:
case 2373:
case 1299:
case 1908:
case 2557:
case 3984:
case 2639:
case 2564:
case 2936:
case 2963:
case 1344:
case 2680:
case 2185:
case 345:
case 1066:
case 3959:
case 267:
case 2103:
case 2240:
case 783:
case 2982:
case 2704:
case 3505:
case 444:
case 1168:
case 3329:
case 2811:
case 1525:
case 3396:
case 3493:
case 1309:
case 3151:
case 356:
case 1132:
case 1241:
case 726:
case 2454:
case 24:
case 478:
case 2337:
case 886:
case 2791:
case 3318:
case 4059:
case 3885:
case 1257:
case 702:
case 341:
case 3460:
case 1763:
case 186:
case 1157:
case 584:
case 2771:
case 1646:
case 610:
case 716:
case 2579:
case 4066:
case 3933:
case 813:
case 123:
case 3534:
case 269:
case 1862:
case 1084:
case 2203:
case 2140:
case 3376:
case 2586:
case 292:
case 3071:
case 3825:
case 945:
case 708:
case 1827:
case 3623:
case 2482:
case 3459:
case 827:
case 966:
case 1245:
case 561:
case 2520:
case 129:
case 1718:
case 3594:
case 3993:
case 1816:
case 2553:
case 29:
case 2954:
case 4093:
case 2377:
case 2815:
case 2324:
case 1213:
case 1037:
case 1898:
case 47:
case 248:
case 1796:
case 3501:
case 2742:
case 4012:
case 2967:
case 3578:
case 1449:
case 2422:
case 3255:
case 3683:
case 3960:
case 2731:
case 3075:
case 2580:
case 1714:
case 3598:
case 3821:
case 1878:
case 2319:
case 2146:
case 2641:
case 3370:
case 1776:
case 119:
case 2958:
case 932:
case 829:
case 3527:
case 70:
case 3336:
case 3433:
case 105:
case 4060:
case 2328:
case 1581:
case 3574:
case 655:
case 1145:
case 2800:
case 3973:
case 1491:
case 1153:
case 3215:
case 2996:
case 3638:
case 2929:
case 366:
case 4037:
case 2121:
case 2626:
case 3382:
case 3748:
case 2699:
case 3846:
case 2490:
case 1995:
case 3424:
case 646:
case 2918:
case 633:
case 2281:
case 338:
case 417:
case 257:
case 101:
case 3556:
case 2048:
case 991:
case 3100:
case 537:
case 194:
case 651:
case 3605:
case 259:
case 2989:
case 3143:
case 1975:
case 894:
case 1758:
case 565:
case 3497:
case 3761:
case 427:
case 801:
case 1365:
case 2930:
case 1139:
case 332:
case 2513:
case 2221:
case 3428:
case 1073:
case 3484:
case 1408:
case 3610:
case 2679:
case 1253:
case 2061:
case 2855:
case 2044:
case 7:
case 395:
case 2436:
case 4052:
case 1931:
case 2463:
case 557:
case 2938:
case 947:
case 3051:
case 631:
case 3865:
case 1609:
case 3356:
case 3453:
case 1822:
case 2401:
case 2478:
case 3999:
case 3208:
case 993:
case 358:
case 3926:
case 712:
case 2559:
case 2372:
case 4026:
case 1188:
case 96:
case 1297:
case 2747:
case 2962:
case 1119:
case 3740:
case 2934:
case 1064:
case 2652:
case 2427:
case 1041:
case 722:
case 3630:
case 1224:
case 2416:
case 1197:
case 3171:
case 3522:
case 949:
case 2040:
case 239:
case 265:
case 3979:
case 2910:
case 1415:
case 2498:
case 3480:
case 1159:
case 1762:
case 64:
case 1026:
case 3590:
case 3006:
case 1233:
case 2835:
case 3968:
case 698:
case 2456:
case 3387:
case 2353:
case 958:
case 4032:
case 548:
case 2808:
case 2025:
case 2871:
case 1648:
case 3394:
case 667:
case 4068:
case 1738:
case 2202:
case 3472:
case 1863:
case 1836:
case 980:
case 3249:
case 1455:
case 2165:
case 2102:
case 669:
case 876:
case 3011:
case 635:
case 3413:
case 3957:
case 3149:
case 3316:
case 1381:
case 2584:
case 2891:
case 3964:
case 692:
case 3563:
case 3941:
case 488:
case 3492:
case 1079:
case 1661:
case 1166:
case 2085:
case 2804:
case 349:
case 4064:
case 764:
case 4041:
case 3398:
case 2673:
case 210:
case 2339:
case 773:
case 2597:
case 206:
case 1387:
case 3951:
case 193:
case 1968:
case 1590:
case 1725:
case 3321:
case 903:
case 3099:
case 1006:
case 147:
case 3947:
case 1301:
case 5:
case 2903:
case 3870:
case 1378:
case 3026:
case 4047:
case 3455:
case 3863:
case 3738:
case 2005:
case 2300:
case 765:
case 1932:
case 4051:
case 3648:
case 690:
case 1964:
case 2446:
case 2343:
case 950:
case 3307:
case 1563:
case 1957:
case 1413:
case 2779:
case 228:
case 2508:
case 1011:
case 452:
case 2877:
case 3734:
case 847:
case 1445:
case 2535:
case 2786:
case 575:
case 1398:
case 3133:
case 893:
case 3644:
case 3079:
case 3661:
case 1047:
case 3228:
case 158:
case 3284:
case 2732:
case 1999:
case 46:
case 1191:
case 1696:
case 3609:
case 608:
case 3750:
case 589:
case 3068:
case 2236:
case 1629:
case 1802:
case 1051:
case 1420:
case 2925:
case 3032:
case 976:
case 3400:
case 264:
case 3219:
case 710:
case 852:
case 3297:
case 571:
case 447:
case 2866:
case 2833:
case 1235:
case 3288:
case 152:
case 626:
case 1630:
case 350:
case 1135:
case 449:
case 2675:
case 2407:
case 2859:
case 388:
case 1480:
case 1979:
case 3415:
case 2631:
case 1522:
case 1614:
case 2549:
case 3184:
case 3128:
case 1676:
case 587:
case 2741:
case 4095:
case 2101:
case 1846:
case 2178:
case 929:
case 2555:
case 2892:
case 917:
case 3767:
case 573:
case 3093:
case 3153:
case 895:
case 1215:
case 404:
case 3280:
case 2813:
case 2298:
case 2909:
case 1662:
case 394:
case 1556:
case 3869:
case 742:
case 1488:
case 3995:
case 2067:
case 138:
case 289:
case 3302:
case 2174:
case 3435:
case 1322:
case 3758:
case 1569:
case 3856:
case 3975:
case 1419:
case 1200:
case 1143:
case 3220:
case 763:
case 2127:
case 1952:
case 2760:
case 927:
case 2058:
case 866:
case 3931:
case 3685:
case 1610:
case 3253:
case 4075:
case 2287:
case 330:
case 905:
case 3139:
case 3073:
case 685:
case 3874:
case 2096:
case 2391:
case 518:
case 1807:
case 3603:
case 1459:
case 3245:
case 61:
case 2647:
case 1623:
case 2269:
case 438:
case 1501:
case 2304:
case 3172:
case 2018:
case 1095:
case 1578:
case 1650:
case 3521:
case 3213:
case 2880:
case 1155:
case 901:
case 466:
case 3292:
case 1587:
case 2839:
case 3052:
case 3776:
case 512:
case 804:
case 3192:
case 3714:
case 495:
case 1821:
case 2402:
case 2465:
case 3272:
case 3449:
case 891:
case 3113:
case 275:
case 1683:
case 2030:
case 3887:
case 240:
case 1973:
case 1516:
case 2820:
case 3581:
case 2752:
case 2076:
case 930:
case 3730:
case 2944:
case 319:
case 1031:
case 528:
case 2788:
case 3309:
case 1151:
case 43:
case 1562:
case 1505:
case 2342:
case 313:
case 618:
case 1412:
case 1959:
case 1147:
case 2777:
case 2879:
case 3257:
case 2283:
case 1318:
case 2655:
case 141:
case 606:
case 3024:
case 3077:
case 3264:
case 1538:
case 234:
case 3132:
case 2070:
case 2728:
case 2784:
case 1389:
case 612:
case 2375:
case 3164:
case 3646:
case 3141:
case 841:
case 2183:
case 1035:
case 3838:
case 1330:
case 1008:
case 1314:
case 52:
case 3770:
case 2719:
case 3028:
case 1376:
case 3805:
case 3862:
case 3084:
case 731:
case 2797:
case 2461:
case 470:
case 1966:
case 323:
case 2444:
case 628:
case 3268:
case 1550:
case 441:
case 2841:
case 577:
case 3117:
case 3991:
case 2857:
case 673:
case 216:
case 456:
case 1694:
case 4091:
case 2234:
case 344:
case 3286:
case 1437:
case 1367:
case 3681:
case 3186:
case 1997:
case 2868:
case 2733:
case 2766:
case 1674:
case 3540:
case 3935:
case 3823:
case 1627:
case 83:
case 1452:
case 2205:
case 170:
case 3475:
case 986:
case 2615:
case 1358:
case 579:
case 1698:
case 3033:
case 2110:
case 3179:
case 3361:
case 226:
case 1765:
case 2238:
case 3344:
case 74:
case 1583:
case 4035:
case 1928:
case 3971:
case 2832:
case 923:
case 3303:
case 2921:
case 468:
case 307:
case 2214:
case 2056:
case 3548:
case 1142:
case 689:
case 508:
case 4000:
case 1554:
case 2196:
case 277:
case 2289:
case 2873:
case 3900:
case 114:
case 1920:
case 911:
case 3137:
case 2230:
case 671:
case 1861:
case 3858:
case 1690:
case 3013:
case 3237:
case 2130:
case 2218:
case 279:
case 1295:
case 1383:
case 462:
case 2981:
case 3411:
case 3943:
case 3544:
case 2812:
case 499:
case 3152:
case 309:
case 1131:
case 2229:
case 4043:
case 3915:
case 2485:
case 315:
case 2608:
case 1746:
case 3340:
case 1848:
case 1939:
case 3045:
case 687:
case 1338:
case 3830:
case 136:
case 143:
case 414:
case 2258:
case 3193:
case 3447:
case 3889:
case 534:
case 4055:
case 3273:
case 2403:
case 1518:
case 2852:
case 2720:
case 3112:
case 925:
case 2167:
case 2753:
case 168:
case 311:
case 3701:
case 3876:
case 2094:
case 1362:
case 3020:
case 3778:
case 1529:
case 1432:
case 2542:
case 3814:
case 3325:
case 1000:
case 3509:
case 2946:
case 1441:
case 1334:
case 2739:
case 733:
case 22:
case 2016:
case 2267:
case 3665:
case 1809:
case 3896:
case 2074:
case 1457:
case 868:
case 2780:
case 1514:
case 1622:
case 2311:
case 321:
case 909:
case 897:
case 1530:
case 2440:
case 360:
case 3212:
case 843:
case 424:
case 675:
case 3080:
case 2837:
case 98:
case 2158:
case 3716:
case 1310:
case 1781:
case 3818:
case 3293:
case 1699:
case 1359:
case 3606:
case 3101:
case 2012:
case 2239:
case 1626:
case 27:
case 3555:
case 448:
case 2767:
case 2093:
case 2280:
case 3298:
case 3909:
case 371:
case 3054:
case 1207:
case 2120:
case 2869:
case 3712:
case 3227:
case 2404:
case 157:
case 474:
case 625:
case 3216:
case 3793:
case 389:
case 2365:
case 3174:
case 857:
case 1930:
case 615:
case 1545:
case 3116:
case 3611:
case 609:
case 2758:
case 1181:
case 1686:
case 2975:
case 68:
case 387:
case 1107:
case 159:
case 3294:
case 2220:
case 940:
case 1333:
case 550:
case 1463:
case 3872:
case 704:
case 2931:
case 1855:
case 2685:
case 1061:
case 1679:
case 1044:
case 3201:
case 230:
case 2471:
case 3278:
case 1221:
case 2139:
case 3737:
case 576:
case 1668:
case 611:
case 3156:
case 1795:
case 3651:
case 2816:
case 217:
case 1843:
case 3269:
case 842:
case 971:
case 3018:
case 3304:
case 732:
case 2729:
case 1742:
case 2898:
case 1815:
case 1388:
case 3948:
case 1377:
case 3:
case 795:
case 1954:
case 3839:
case 989:
case 2052:
case 4061:
case 2192:
case 660:
case 766:
case 1580:
case 2714:
case 1539:
case 2449:
case 1422:
case 848:
case 2887:
case 874:
case 227:
case 2640:
case 3308:
case 3014:
case 142:
case 2581:
case 1384:
case 3169:
case 2894:
case 3543:
case 205:
case 2507:
case 1958:
case 1353:
case 306:
case 1693:
case 3897:
case 2951:
case 2017:
case 1588:
case 322:
case 2099:
case 2705:
case 2762:
case 752:
case 3504:
case 2947:
case 120:
case 3903:
case 810:
case 2026:
case 2455:
case 1950:
case 276:
case 1265:
case 2738:
case 3884:
case 3005:
case 3591:
case 1025:
case 973:
case 3799:
case 2648:
case 1706:
case 3446:
case 527:
case 3343:
case 1983:
case 861:
case 4040:
case 1528:
case 3779:
case 1584:
case 2381:
case 623:
case 1165:
case 758:
case 312:
case 1597:
case 3877:
case 3535:
case 1711:
case 686:
case 3824:
case 2644:
case 1519:
case 1804:
case 2661:
case 2079:
case 461:
case 906:
case 644:
case 137:
case 1478:
case 2822:
case 839:
case 2750:
case 2068:
case 865:
case 3236:
case 3642:
case 1938:
case 3263:
case 501:
case 1494:
case 2032:
case 57:
case 1905:
case 1962:
case 2219:
case 1747:
case 364:
case 2177:
case 2188:
case 3355:
case 2297:
case 3695:
case 1751:
case 420:
case 1559:
case 3833:
case 3768:
case 1416:
case 3290:
case 747:
case 1313:
case 2224:
case 2911:
case 3481:
case 1474:
case 2057:
case 1652:
case 2064:
case 2041:
case 1427:
case 2346:
case 530:
case 2443:
case 1533:
case 1934:
case 1566:
case 288:
case 2783:
case 165:
case 139:
case 3985:
case 2415:
case 3631:
case 3163:
case 896:
case 1040:
case 672:
case 2502:
case 1345:
case 3347:
case 1901:
case 2406:
case 3276:
case 954:
case 2303:
case 3921:
case 1438:
case 2548:
case 146:
case 3129:
case 1109:
case 3351:
case 601:
case 3691:
case 1755:
case 3289:
case 2900:
case 799:
case 1405:
case 985:
case 2252:
case 4021:
case 3230:
case 3604:
case 3118:
case 1688:
case 1512:
case 2013:
case 484:
case 3130:
case 379:
case 797:
case 1916:
case 3981:
case 3189:
case 1364:
case 2561:
case 3745:
case 3907:
case 2544:
case 736:
case 3812:
case 1046:
case 2152:
case 846:
case 3229:
case 3713:
case 1410:
case 3296:
case 3485:
case 455:
case 1998:
case 3671:
case 4081:
case 851:
case 1628:
case 572:
case 2045:
case 1261:
case 2053:
case 354:
case 1956:
case 3258:
case 724:
case 2193:
case 2451:
case 1537:
case 1021:
case 3306:
case 1659:
case 1875:
case 884:
case 3720:
case 3595:
case 3852:
case 2112:
case 1326:
case 1423:
case 977:
case 629:
case 3167:
case 513:
case 2787:
case 451:
case 211:
case 2876:
case 446:
case 2020:
case 3542:
case 2814:
case 855:
case 3154:
case 2509:
case 3946:
case 3027:
case 3739:
case 1007:
case 619:
case 2829:
case 1842:
case 3016:
case 1081:
case 3267:
case 2602:
case 2665:
case 1483:
case 2896:
case 3074:
case 3780:
case 605:
case 184:
case 1743:
case 3440:
case 260:
case 981:
case 1969:
case 2727:
case 2212:
case 1161:
case 3575:
case 2774:
case 1144:
case 586:
case 1633:
case 3098:
case 2080:
case 4046:
case 2716:
case 1552:
case 2818:
case 3724:
case 511:
case 2309:
case 1704:
case 2168:
case 3342:
case 3123:
case 431:
case 2834:
case 1240:
case 3777:
case 3655:
case 3150:
case 2088:
case 3090:
case 2024:
case 1337:
case 3506:
case 1517:
case 1454:
case 334:
case 2241:
case 3070:
case 3728:
case 1692:
case 2585:
case 1352:
case 1579:
case 3375:
case 983:
case 3899:
case 560:
case 2646:
case 1922:
case 3817:
case 3250:
case 2736:
case 3965:
case 2097:
case 286:
case 2763:
case 4065:
case 4002:
case 3511:
case 3223:
case 1645:
case 390:
case 1203:
case 2862:
case 2084:
case 1458:
case 169:
case 3797:
case 135:
case 521:
case 3063:
case 1735:
case 2059:
case 2621:
case 3864:
case 3082:
case 2117:
case 2991:
case 1285:
case 3857:
case 44:
case 2883:
case 1653:
case 278:
case 3138:
case 316:
case 2442:
case 507:
case 3551:
case 3759:
case 2348:
case 3105:
case 153:
case 244:
case 1990:
case 1418:
case 2904:
case 3547:
case 934:
case 308:
case 2681:
case 1851:
case 492:
case 1065:
case 831:
case 509:
case 3868:
case 1360:
case 3733:
case 3022:
case 1430:
case 58:
case 435:
case 469:
case 1489:
case 2475:
case 2607:
case 1970:
case 1847:
case 3615:
case 2217:
case 2850:
case 1680:
case 1185:
case 1936:
case 326:
case 3238:
case 1541:
case 100:
case 1414:
case 2226:
case 302:
case 1476:
case 1373:
case 741:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1771948802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,];
var gg_b = "1771948802/";

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
