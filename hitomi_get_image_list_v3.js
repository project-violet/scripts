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
case 2005:
case 1264:
case 685:
case 784:
case 2957:
case 3890:
case 2130:
case 4068:
case 3720:
case 1935:
case 1636:
case 1611:
case 3964:
case 680:
case 2098:
case 2877:
case 2933:
case 2055:
case 3447:
case 188:
case 1003:
case 956:
case 2025:
case 3961:
case 1614:
case 51:
case 3700:
case 594:
case 682:
case 3816:
case 3746:
case 332:
case 3762:
case 3750:
case 926:
case 1023:
case 2186:
case 1680:
case 1742:
case 2333:
case 125:
case 390:
case 1812:
case 3748:
case 2307:
case 3:
case 637:
case 3241:
case 840:
case 91:
case 152:
case 410:
case 2010:
case 395:
case 120:
case 1941:
case 845:
case 3544:
case 526:
case 534:
case 155:
case 2327:
case 1944:
case 3670:
case 723:
case 1638:
case 2475:
case 150:
case 4066:
case 3361:
case 3632:
case 2081:
case 3244:
case 1311:
case 3820:
case 2101:
case 781:
case 360:
case 675:
case 1765:
case 2763:
case 22:
case 3769:
case 3734:
case 3417:
case 2777:
case 3731:
case 1232:
case 408:
case 2058:
case 1314:
case 2997:
case 3173:
case 25:
case 3850:
case 3862:
case 3846:
case 672:
case 689:
case 3211:
case 377:
case 3718:
case 3848:
case 3580:
case 1936:
case 1635:
case 2478:
case 1842:
case 3639:
case 2607:
case 991:
case 3236:
case 2040:
case 159:
case 849:
case 2026:
case 3661:
case 1914:
case 216:
case 3511:
case 2397:
case 3332:
case 399:
case 1749:
case 1819:
case 3214:
case 4012:
case 3745:
case 564:
case 129:
case 1980:
case 3370:
case 1494:
case 2848:
case 2718:
case 1787:
case 341:
case 3478:
case 2580:
case 3056:
case 13:
case 2514:
case 2664:
case 4043:
case 709:
case 3040:
case 601:
case 3397:
case 1189:
case 316:
case 1486:
case 3026:
case 2661:
case 1743:
case 299:
case 1491:
case 2745:
case 2815:
case 2214:
case 4087:
case 3185:
case 2536:
case 2370:
case 949:
case 2820:
case 2790:
case 260:
case 3101:
case 718:
case 3482:
case 32:
case 3124:
case 549:
case 1488:
case 3154:
case 2800:
case 436:
case 2238:
case 1297:
case 3121:
case 2731:
case 1175:
case 3058:
case 1002:
case 2862:
case 3179:
case 2850:
case 2716:
case 2167:
case 613:
case 454:
case 16:
case 3333:
case 344:
case 2339:
case 945:
case 1451:
case 1182:
case 2:
case 2818:
case 2748:
case 2241:
case 3084:
case 103:
case 44:
case 3010:
case 940:
case 702:
case 3357:
case 705:
case 1843:
case 1713:
case 3096:
case 3327:
case 2670:
case 604:
case 1404:
case 3697:
case 2361:
case 700:
case 2715:
case 3081:
case 1421:
case 2845:
case 856:
case 861:
case 235:
case 747:
case 1527:
case 2720:
case 3130:
case 2890:
case 2964:
case 2939:
case 542:
case 3933:
case 3098:
case 2834:
case 2869:
case 3863:
case 1009:
case 1092:
case 907:
case 1485:
case 3025:
case 3191:
case 2831:
case 2700:
case 451:
case 232:
case 540:
case 2483:
case 2750:
case 2762:
case 1029:
case 3489:
case 3927:
case 2535:
case 3186:
case 4091:
case 3271:
case 384:
case 371:
case 3778:
case 1487:
case 1851:
case 735:
case 1824:
case 1225:
case 1794:
case 3229:
case 980:
case 3592:
case 3574:
case 2223:
case 1971:
case 3509:
case 1730:
case 2537:
case 1598:
case 1801:
case 1555:
case 661:
case 3640:
case 2253:
case 4030:
case 1909:
case 1974:
case 1992:
case 3259:
case 3955:
case 3656:
case 1205:
case 3998:
case 3033:
case 982:
case 3057:
case 3209:
case 3274:
case 3292:
case 3875:
case 2523:
case 2203:
case 3529:
case 1854:
case 626:
case 732:
case 3905:
case 528:
case 3310:
case 2237:
case 1791:
case 2445:
case 1371:
case 787:
case 3981:
case 790:
case 1699:
case 61:
case 3325:
case 3695:
case 3996:
case 1281:
case 2142:
case 1788:
case 579:
case 2434:
case 2469:
case 3463:
case 3782:
case 585:
case 3628:
case 3910:
case 2431:
case 205:
case 1309:
case 1392:
case 2119:
case 193:
case 3984:
case 2416:
case 2883:
case 958:
case 1210:
case 3889:
case 597:
case 1724:
case 1295:
case 1872:
case 1894:
case 1258:
case 2448:
case 3097:
case 381:
case 3260:
case 3252:
case 1999:
case 760:
case 3326:
case 1177:
case 2070:
case 1528:
case 664:
case 3696:
case 3958:
case 3522:
case 1960:
case 765:
case 1952:
case 1704:
case 813:
case 1779:
case 1558:
case 1595:
case 1886:
case 1413:
case 3306:
case 4001:
case 3610:
case 3340:
case 1891:
case 2415:
case 3684:
case 163:
case 1228:
case 739:
case 1754:
case 567:
case 2593:
case 3356:
case 443:
case 10:
case 3775:
case 972:
case 1629:
case 3358:
case 1360:
case 1352:
case 1506:
case 406:
case 4085:
case 1671:
case 3308:
case 1540:
case 572:
case 1556:
case 691:
case 967:
case 3926:
case 1399:
case 799:
case 1609:
case 2400:
case 1674:
case 3940:
case 3655:
case 3956:
case 3698:
case 575:
case 1240:
case 3328:
case 2462:
case 2783:
case 2450:
case 570:
case 2149:
case 2446:
case 3143:
case 3906:
case 2358:
case 1080:
case 3420:
case 438:
case 1623:
case 2882:
case 1118:
case 117:
case 427:
case 309:
case 1393:
case 513:
case 3112:
case 1014:
case 2926:
case 901:
case 3400:
case 716:
case 2956:
case 2655:
case 1653:
case 457:
case 3783:
case 3446:
case 3149:
case 2605:
case 1468:
case 649:
case 2143:
case 2681:
case 1134:
case 870:
case 1169:
case 2326:
case 2252:
case 2097:
case 1993:
case 1038:
case 1442:
case 498:
case 3070:
case 875:
case 2696:
case 4073:
case 2299:
case 3165:
case 2928:
case 872:
case 2306:
case 1419:
case 1767:
case 2610:
case 2552:
case 2684:
case 2340:
case 2502:
case 75:
case 2222:
case 2775:
case 3593:
case 2356:
case 828:
case 2981:
case 1465:
case 253:
case 744:
case 3490:
case 2996:
case 468:
case 3142:
case 302:
case 3717:
case 148:
case 3434:
case 2463:
case 1041:
case 223:
case 858:
case 2628:
case 3431:
case 2113:
case 2984:
case 3416:
case 3119:
case 2398:
case 2776:
case 300:
case 2355:
case 3883:
case 1337:
case 2889:
case 897:
case 271:
case 284:
case 2396:
case 504:
case 3418:
case 347:
case 880:
case 2229:
case 2592:
case 2574:
case 3537:
case 2626:
case 2925:
case 607:
case 2384:
case 1146:
case 1867:
case 3168:
case 3039:
case 1937:
case 2998:
case 2656:
case 1162:
case 2875:
case 3523:
case 2292:
case 2057:
case 1953:
case 3203:
case 2606:
case 2310:
case 3779:
case 1928:
case 3595:
case 3558:
case 673:
case 1306:
case 2767:
case 3508:
case 1684:
case 363:
case 3721:
case 2131:
case 3891:
case 404:
case 1502:
case 1775:
case 30:
case 1356:
case 3258:
case 4075:
case 3295:
case 3724:
case 2169:
case 1908:
case 3163:
case 174:
case 3999:
case 1260:
case 1878:
case 3177:
case 2038:
case 3528:
case 3701:
case 64:
case 1958:
case 2190:
case 1995:
case 3208:
case 1522:
case 3952:
case 3960:
case 3674:
case 3692:
case 3206:
case 1698:
case 1655:
case 651:
case 2637:
case 376:
case 2036:
case 1876:
case 3659:
case 729:
case 2468:
case 2080:
case 2623:
case 3352:
case 88:
case 3360:
case 621:
case 759:
case 2393:
case 1187:
case 3399:
case 3302:
case 1384:
case 2146:
case 1640:
case 2449:
case 1259:
case 3992:
case 1007:
case 3443:
case 957:
case 3786:
case 3804:
case 696:
case 2162:
case 1656:
case 3879:
case 3959:
case 1292:
case 1209:
case 1057:
case 2953:
case 1529:
case 2035:
case 3298:
case 1606:
case 3854:
case 1310:
case 1271:
case 1559:
case 2412:
case 3487:
case 184:
case 1396:
case 806:
case 3851:
case 3772:
case 3794:
case 3225:
case 1381:
case 1229:
case 3971:
case 1574:
case 1592:
case 1626:
case 3801:
case 3598:
case 2041:
case 123:
case 3284:
case 2353:
case 4082:
case 3359:
case 654:
case 413:
case 2115:
case 527:
case 3392:
case 3374:
case 3309:
case 1984:
case 3581:
case 2303:
case 1398:
case 722:
case 1776:
case 1889:
case 3210:
case 750:
case 153:
case 1608:
case 3296:
case 998:
case 1325:
case 3699:
case 725:
case 1658:
case 3281:
case 1996:
case 2323:
case 3652:
case 3510:
case 720:
case 248:
case 2148:
case 1463:
case 2596:
case 2885:
case 489:
case 2359:
case 1431:
case 2622:
case 2392:
case 2581:
case 2210:
case 470:
case 2296:
case 2584:
case 3465:
case 3693:
case 1490:
case 76:
case 475:
case 3044:
case 3323:
case 348:
case 2510:
case 2652:
case 1166:
case 3148:
case 3903:
case 3867:
case 3146:
case 233:
case 1168:
case 619:
case 2443:
case 2974:
case 3937:
case 2525:
case 1039:
case 2879:
case 3162:
case 2804:
case 2959:
case 1523:
case 3035:
case 3953:
case 3100:
case 2854:
case 2298:
case 57:
case 2791:
case 3412:
case 3923:
case 1553:
case 467:
case 2505:
case 2851:
case 2794:
case 2971:
case 2730:
case 1537:
case 2555:
case 711:
case 2801:
case 1400:
case 2674:
case 2692:
case 3603:
case 4047:
case 2206:
case 3637:
case 3011:
case 2240:
case 3036:
case 1462:
case 1783:
case 3468:
case 497:
case 2352:
case 480:
case 2226:
case 317:
case 2671:
case 1817:
case 109:
case 2888:
case 2556:
case 485:
case 2302:
case 2399:
case 3014:
case 458:
case 2704:
case 2558:
case 3773:
case 2922:
case 612:
case 3767:
case 3419:
case 263:
case 1593:
case 2724:
case 3169:
case 118:
case 2894:
case 3134:
case 2872:
case 3466:
case 2163:
case 2751:
case 428:
case 1032:
case 2902:
case 610:
case 3442:
case 2177:
case 2701:
case 1070:
case 2528:
case 714:
case 2208:
case 3190:
case 2830:
case 1800:
case 1238:
case 2297:
case 162:
case 2052:
case 1731:
case 1970:
case 3232:
case 521:
case 2002:
case 1173:
case 2099:
case 1862:
case 3938:
case 1716:
case 139:
case 1846:
case 3270:
case 1820:
case 815:
case 1790:
case 3311:
case 2597:
case 160:
case 440:
case 551:
case 566:
case 668:
case 2022:
case 94:
case 1417:
case 378:
case 4031:
case 445:
case 214:
case 2189:
case 2486:
case 1661:
case 966:
case 1332:
case 951:
case 2743:
case 54:
case 4018:
case 407:
case 1370:
case 776:
case 1211:
case 3147:
case 3866:
case 177:
case 1718:
case 2787:
case 3635:
case 921:
case 3842:
case 3712:
case 23:
case 2430:
case 1664:
case 1639:
case 2485:
case 3614:
case 1961:
case 449:
case 983:
case 524:
case 1831:
case 2227:
case 996:
case 4020:
case 3768:
case 1746:
case 3261:
case 1816:
case 819:
case 1750:
case 2557:
case 135:
case 2233:
case 4050:
case 4062:
case 3239:
case 4046:
case 3636:
case 3053:
case 627:
case 3037:
case 2178:
case 3611:
case 130:
case 388:
case 1235:
case 1447:
case 2257:
case 638:
case 536:
case 3849:
case 3467:
case 3719:
case 2843:
case 1541:
case 2176:
case 2404:
case 350:
case 3638:
case 4048:
case 793:
case 1715:
case 1244:
case 924:
case 4015:
case 3812:
case 583:
case 325:
case 2887:
case 1339:
case 1364:
case 1748:
case 3766:
case 1241:
case 352:
case 195:
case 2719:
case 2467:
case 2849:
case 836:
case 3843:
case 643:
case 255:
case 3176:
case 3479:
case 2638:
case 250:
case 908:
case 1697:
case 3454:
case 3421:
case 1081:
case 36:
case 1188:
case 144:
case 1307:
case 3182:
case 3451:
case 303:
case 431:
case 220:
case 2941:
case 2335:
case 67:
case 3401:
case 824:
case 1025:
case 3485:
case 2614:
case 2539:
case 3533:
case 3227:
case 1191:
case 3071:
case 3507:
case 2768:
case 3557:
case 2023:
case 346:
case 491:
case 2865:
case 2239:
case 2341:
case 1130:
case 2053:
case 2935:
case 2611:
case 1877:
case 508:
case 1098:
case 1933:
case 606:
case 1055:
case 288:
case 2003:
case 1194:
case 3092:
case 3257:
case 2338:
case 426:
case 1026:
case 3486:
case 1397:
case 3743:
case 3813:
case 2749:
case 866:
case 1185:
case 1627:
case 2147:
case 141:
case 1478:
case 512:
case 2712:
case 1657:
case 821:
case 33:
case 1056:
case 68:
case 259:
case 1040:
case 1154:
case 3052:
case 1121:
case 4077:
case 2232:
case 3175:
case 912:
case 2644:
case 1095:
case 3099:
case 2314:
case 2938:
case 2093:
case 1179:
case 2868:
case 2311:
case 910:
case 494:
case 2532:
case 1763:
case 1151:
case 1124:
case 278:
case 41:
case 2570:
case 915:
case 2336:
case 2832:
case 3174:
case 2946:
case 2645:
case 2962:
case 1198:
case 518:
case 2950:
case 616:
case 2137:
case 3897:
case 301:
case 3727:
case 2761:
case 1030:
case 3456:
case 2268:
case 3440:
case 2739:
case 1086:
case 3426:
case 3733:
case 641:
case 2348:
case 3707:
case 267:
case 2618:
case 1091:
case 18:
case 3757:
case 909:
case 2920:
case 1125:
case 1687:
case 3213:
case 493:
case 486:
case 2566:
case 2017:
case 1184:
case 2346:
case 1913:
case 2669:
case 1452:
case 1181:
case 2242:
case 3513:
case 2320:
case 2266:
case 270:
case 1402:
case 1499:
case 874:
case 2948:
case 881:
case 304:
case 905:
case 3827:
case 1128:
case 3484:
case 40:
case 143:
case 2615:
case 2732:
case 823:
case 742:
case 900:
case 3410:
case 2345:
case 1001:
case 2770:
case 2318:
case 237:
case 3807:
case 1108:
case 2969:
case 1079:
case 1004:
case 3496:
case 2265:
case 3199:
case 2839:
case 1387:
case 228:
case 1195:
case 2990:
case 740:
case 1263:
case 3857:
case 3160:
case 3481:
case 1054:
case 1277:
case 2331:
case 707:
case 476:
case 3587:
case 2249:
case 3243:
case 2662:
case 1459:
case 3455:
case 502:
case 3498:
case 2600:
case 1409:
case 1474:
case 282:
case 2047:
case 947:
case 1085:
case 3425:
case 2212:
case 285:
case 3287:
case 297:
case 2918:
case 3363:
case 871:
case 884:
case 3089:
case 1126:
case 1987:
case 280:
case 3377:
case 3331:
case 157:
case 4036:
case 1518:
case 2405:
case 669:
case 2587:
case 3249:
case 3512:
case 3650:
case 2243:
case 1245:
case 632:
case 3047:
case 3316:
case 382:
case 379:
case 1403:
case 3390:
case 1711:
case 2543:
case 385:
case 4014:
case 1365:
case 3549:
case 2287:
case 635:
case 1545:
case 138:
case 3918:
case 2363:
case 397:
case 1736:
case 2377:
case 1912:
case 2827:
case 1231:
case 1738:
case 800:
case 3565:
case 584:
case 571:
case 3732:
case 2122:
case 358:
case 2410:
case 3861:
case 805:
case 337:
case 687:
case 6:
case 1290:
case 198:
case 2833:
case 3193:
case 1312:
case 953:
case 2496:
case 3990:
case 2075:
case 1642:
case 1666:
case 2481:
case 1516:
case 4038:
case 3648:
case 2213:
case 1880:
case 3346:
case 389:
case 3017:
case 3631:
case 1368:
case 2082:
case 639:
case 3350:
case 3362:
case 3634:
case 3669:
case 2513:
case 974:
case 3242:
case 2663:
case 2458:
case 1811:
case 3320:
case 448:
case 1248:
case 764:
case 1493:
case 370:
case 1942:
case 1836:
case 3948:
case 1515:
case 2174:
case 2109:
case 3645:
case 3950:
case 2727:
case 2897:
case 2078:
case 3137:
case 1246:
case 3153:
case 2159:
case 3268:
case 3870:
case 1649:
case 2440:
case 1250:
case 3900:
case 1262:
case 2426:
case 2129:
case 3764:
case 2733:
case 809:
case 677:
case 1500:
case 3348:
case 3568:
case 1546:
case 1550:
case 1612:
case 1161:
case 1480:
case 2689:
case 916:
case 1703:
case 349:
case 1414:
case 1737:
case 2291:
case 2530:
case 2376:
case 899:
case 2828:
case 4037:
case 3000:
case 2294:
case 2725:
case 4003:
case 1139:
case 1068:
case 3046:
case 3317:
case 2230:
case 55:
case 541:
case 422:
case 3048:
case 1066:
case 450:
case 839:
case 455:
case 862:
case 2856:
case 3470:
case 2710:
case 1667:
case 2796:
case 865:
case 231:
case 110:
case 452:
case 3917:
case 2288:
case 860:
case 425:
case 3141:
case 264:
case 92:
case 3273:
case 4093:
case 605:
case 2204:
case 2551:
case 2805:
case 3090:
case 704:
case 2676:
case 1170:
case 3138:
case 2898:
case 2077:
case 892:
case 2855:
case 3383:
case 1444:
case 600:
case 1837:
case 1967:
case 3069:
case 342:
case 3034:
case 1803:
case 2579:
case 2504:
case 21:
case 2251:
case 2825:
case 1441:
case 2795:
case 2224:
case 895:
case 2682:
case 944:
case 3567:
case 3347:
case 890:
case 2554:
case 602:
case 887:
case 1823:
case 340:
case 1373:
case 832:
case 2884:
case 1367:
case 2285:
case 429:
case 2706:
case 2810:
case 2375:
case 2756:
case 3461:
case 830:
case 3947:
case 1049:
case 2433:
case 459:
case 3464:
case 3439:
case 234:
case 3136:
case 2896:
case 261:
case 2678:
case 835:
case 3045:
case 2881:
case 3989:
case 196:
case 1087:
case 2114:
case 1379:
case 1304:
case 590:
case 3285:
case 3884:
case 3706:
case 207:
case 2018:
case 1354:
case 1289:
case 3810:
case 3740:
case 1321:
case 932:
case 3756:
case 3375:
case 595:
case 1985:
case 1043:
case 785:
case 43:
case 684:
case 3585:
case 2136:
case 3726:
case 1630:
case 935:
case 2464:
case 3678:
case 356:
case 1672:
case 797:
case 3524:
case 2273:
case 3279:
case 1954:
case 2267:
case 623:
case 1859:
case 4052:
case 2383:
case 1979:
case 3728:
case 1904:
case 3898:
case 2138:
case 136:
case 3389:
case 1197:
case 3221:
case 1809:
case 1892:
case 1874:
case 1722:
case 1275:
case 2069:
case 242:
case 1688:
case 31:
case 569:
case 3251:
case 3504:
case 9:
case 987:
case 3224:
case 3825:
case 414:
case 653:
case 1871:
case 1752:
case 2567:
case 990:
case 124:
case 737:
case 1760:
case 2617:
case 3521:
case 49:
case 3708:
case 2347:
case 1924:
case 1951:
case 3201:
case 3554:
case 394:
case 995:
case 240:
case 1575:
case 2048:
case 173:
case 577:
case 3497:
case 2144:
case 3856:
case 2470:
case 1679:
case 1604:
case 939:
case 1391:
case 3840:
case 772:
case 3796:
case 82:
case 599:
case 674:
case 960:
case 1372:
case 775:
case 1013:
case 3781:
case 46:
case 2015:
case 1624:
case 1282:
case 14:
case 1576:
case 364:
case 770:
case 1330:
case 2020:
case 3705:
case 4029:
case 446:
case 3572:
case 3594:
case 1774:
case 1792:
case 1709:
case 565:
case 4071:
case 1127:
case 1986:
case 1685:
case 3828:
case 3376:
case 2647:
case 1771:
case 411:
case 2135:
case 4092:
case 3895:
case 3586:
case 3294:
case 3725:
case 3272:
case 977:
case 4009:
case 1930:
case 2062:
case 1388:
case 841:
case 1107:
case 4059:
case 3808:
case 767:
case 852:
case 903:
case 465:
case 3441:
case 820:
case 1573:
case 145:
case 2871:
case 1617:
case 2760:
case 1016:
case 460:
case 2951:
case 77:
case 2829:
case 2799:
case 1273:
case 850:
case 2954:
case 743:
case 254:
case 3170:
case 2979:
case 2904:
case 3837:
case 3444:
case 511:
case 2874:
case 3132:
case 2892:
case 1034:
case 142:
case 1069:
case 2351:
case 1947:
case 888:
case 1136:
case 1439:
case 1464:
case 3435:
case 477:
case 2589:
case 3247:
case 1111:
case 706:
case 2694:
case 2672:
case 1045:
case 911:
case 3373:
case 296:
case 1114:
case 503:
case 1983:
case 2304:
case 2691:
case 3367:
case 56:
case 107:
case 946:
case 2354:
case 2289:
case 1461:
case 2860:
case 1135:
case 3411:
case 2930:
case 2157:
case 1062:
case 2388:
case 2729:
case 3139:
case 2899:
case 3068:
case 2107:
case 2994:
case 617:
case 1046:
case 1683:
case 432:
case 3480:
case 266:
case 2578:
case 3161:
case 829:
case 2991:
case 3703:
case 149:
case 2774:
case 514:
case 2127:
case 3414:
case 3737:
case 2986:
case 2685:
case 2988:
case 310:
case 2601:
case 2372:
case 99:
case 2394:
case 2651:
case 1015:
case 24:
case 2576:
case 1141:
case 3217:
case 4:
case 312:
case 273:
case 2621:
case 3042:
case 3438:
case 3673:
case 1470:
case 2604:
case 2391:
case 53:
case 3667:
case 2582:
case 2276:
case 1826:
case 1378:
case 4010:
case 210:
case 3372:
case 2019:
case 814:
case 1982:
case 215:
case 529:
case 89:
case 3624:
case 978:
case 3576:
case 3330:
case 2217:
case 1806:
case 3621:
case 1784:
case 2438:
case 1675:
case 3386:
case 60:
case 2673:
case 1588:
case 3604:
case 1856:
case 2517:
case 1840:
case 3391:
case 3276:
case 4055:
case 321:
case 3771:
case 1858:
case 2411:
case 1272:
case 1725:
case 1586:
case 2893:
case 959:
case 3899:
case 2139:
case 1978:
case 191:
case 2436:
case 4005:
case 2068:
case 1382:
case 2161:
case 3578:
case 2480:
case 366:
case 1689:
case 2753:
case 1594:
case 1572:
case 1286:
case 3991:
case 2703:
case 3709:
case 929:
case 3822:
case 3792:
case 3774:
case 1291:
case 1530:
case 1376:
case 676:
case 1407:
case 3351:
case 3324:
case 4056:
case 1433:
case 1726:
case 1896:
case 3589:
case 2435:
case 1678:
case 4006:
case 3301:
case 2583:
case 550:
case 3694:
case 738:
case 441:
case 522:
case 1427:
case 1884:
case 219:
case 1285:
case 2367:
case 3691:
case 525:
case 757:
case 633:
case 416:
case 3354:
case 4026:
case 2283:
case 3321:
case 1810:
case 2547:
case 3289:
case 126:
case 1375:
case 552:
case 3686:
case 3985:
case 3901:
case 1579:
case 1504:
case 1251:
case 11:
case 42:
case 2441:
case 1795:
case 1224:
case 1758:
case 3871:
case 1682:
case 925:
case 3924:
case 1521:
case 1554:
case 194:
case 952:
case 2823:
case 2793:
case 803:
case 2065:
case 3921:
case 1524:
case 3954:
case 1279:
case 2853:
case 955:
case 3859:
case 1676:
case 1975:
case 2170:
case 588:
case 1077:
case 3979:
case 1855:
case 3197:
case 1389:
case 2973:
case 3275:
case 3722:
case 3874:
case 4095:
case 4058:
case 922:
case 1063:
case 693:
case 1807:
case 2067:
case 3108:
case 1833:
case 1977:
case 3079:
case 2312:
case 2269:
case 3195:
case 2234:
case 37:
case 1857:
case 3263:
case 1152:
case 3021:
case 1481:
case 1160:
case 3277:
case 481:
case 1827:
case 2590:
case 2231:
case 104:
case 893:
case 2738:
case 343:
case 2349:
case 3051:
case 3613:
case 3001:
case 2218:
case 227:
case 3085:
case 1543:
case 3471:
case 1287:
case 238:
case 1363:
case 3987:
case 1089:
case 3429:
case 306:
case 611:
case 1377:
case 2518:
case 1405:
case 719:
case 2780:
case 2453:
case 3459:
case 3156:
case 548:
case 1498:
case 646:
case 2245:
case 2437:
case 3106:
case 3492:
case 3409:
case 3943:
case 2403:
case 1129:
case 2220:
case 2500:
case 484:
case 1171:
case 471:
case 2562:
case 1757:
case 2735:
case 3687:
case 3125:
case 1192:
case 1406:
case 876:
case 3313:
case 2968:
case 4057:
case 3072:
case 3198:
case 2838:
case 3155:
case 1078:
case 1897:
case 3030:
case 1159:
case 1456:
case 2649:
case 1440:
case 2262:
case 3181:
case 1513:
case 1663:
case 1458:
case 2811:
case 2741:
case 1677:
case 2248:
case 453:
case 614:
case 2493:
case 2665:
case 2515:
case 863:
case 2880:
case 712:
case 2548:
case 80:
case 3110:
case 113:
case 2368:
case 3422:
case 1082:
case 2814:
case 1669:
case 1634:
case 2460:
case 2452:
case 1242:
case 1320:
case 3741:
case 1266:
case 3811:
case 3493:
case 170:
case 3836:
case 74:
case 1690:
case 2499:
case 576:
case 1948:
case 1542:
case 1219:
case 3880:
case 3548:
case 773:
case 2110:
case 1566:
case 1616:
case 90:
case 1017:
case 1346:
case 405:
case 3814:
case 963:
case 1739:
case 1764:
case 817:
case 1123:
case 3342:
case 4061:
case 659:
case 1568:
case 2091:
case 3546:
case 3550:
case 2125:
case 3735:
case 2687:
case 2313:
case 1103:
case 1645:
case 1946:
case 751:
case 1962:
case 1950:
case 3838:
case 1137:
case 3520:
case 1761:
case 629:
case 1870:
case 1268:
case 4039:
case 976:
case 3250:
case 327:
case 3218:
case 2085:
case 1390:
case 2471:
case 3365:
case 1369:
case 1918:
case 688:
case 586:
case 206:
case 2126:
case 3736:
case 1083:
case 180:
case 3912:
case 3423:
case 2140:
case 1331:
case 1646:
case 1945:
case 3518:
case 1249:
case 3780:
case 2156:
case 1512:
case 3844:
case 3245:
case 2943:
case 2492:
case 1316:
case 724:
case 2108:
case 1969:
case 1934:
case 3067:
case 4070:
case 3531:
case 3290:
case 2079:
case 533:
case 2004:
case 1193:
case 625:
case 3073:
case 1839:
case 1265:
case 1864:
case 3234:
case 128:
case 3269:
case 3835:
case 2195:
case 4032:
case 27:
case 3965:
case 3666:
case 1648:
case 652:
case 2277:
case 3231:
case 754:
case 2128:
case 1565:
case 1916:
case 243:
case 2051:
case 2613:
case 986:
case 1931:
case 3619:
case 3534:
case 3569:
case 1770:
case 2001:
case 736:
case 622:
case 993:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758398402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,];
var gg_b = "1758398402/";

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
