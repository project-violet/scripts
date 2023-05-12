// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 28:
case 441:
case 2956:
case 220:
case 156:
case 395:
case 1765:
case 2907:
case 644:
case 173:
case 2644:
case 3653:
case 3415:
case 752:
case 548:
case 53:
case 3420:
case 204:
case 1854:
case 937:
case 1877:
case 2431:
case 2046:
case 714:
case 438:
case 1133:
case 1141:
case 2960:
case 3534:
case 2424:
case 4040:
case 3205:
case 2859:
case 3721:
case 2595:
case 3189:
case 3359:
case 25:
case 293:
case 2158:
case 75:
case 3197:
case 2076:
case 3883:
case 1764:
case 1285:
case 1674:
case 3919:
case 1385:
case 2748:
case 1937:
case 2893:
case 3604:
case 2681:
case 856:
case 1710:
case 680:
case 3594:
case 756:
case 202:
case 103:
case 2602:
case 1432:
case 1225:
case 3625:
case 1476:
case 2968:
case 386:
case 1486:
case 3832:
case 4093:
case 2453:
case 3870:
case 1012:
case 1759:
case 1782:
case 2521:
case 2733:
case 2306:
case 2303:
case 3716:
case 225:
case 1943:
case 2525:
case 2638:
case 3914:
case 2013:
case 1070:
case 85:
case 809:
case 4066:
case 3679:
case 2953:
case 3426:
case 3775:
case 3400:
case 2660:
case 610:
case 2505:
case 4054:
case 2338:
case 2449:
case 3813:
case 2148:
case 2457:
case 2496:
case 1996:
case 2192:
case 592:
case 1174:
case 1679:
case 426:
case 81:
case 1124:
case 2443:
case 3790:
case 237:
case 164:
case 1840:
case 3423:
case 3:
case 912:
case 1993:
case 1209:
case 2034:
case 2354:
case 3525:
case 3226:
case 36:
case 3736:
case 537:
case 1683:
case 1938:
case 190:
case 667:
case 3724:
case 4055:
case 1899:
case 837:
case 1352:
case 1421:
case 482:
case 546:
case 3023:
case 3147:
case 3994:
case 902:
case 364:
case 3582:
case 1256:
case 1353:
case 1843:
case 1621:
case 3239:
case 1546:
case 3235:
case 86:
case 3956:
case 596:
case 2489:
case 376:
case 2546:
case 3529:
case 2609:
case 3366:
case 3091:
case 2840:
case 3045:
case 1498:
case 73:
case 3544:
case 2520:
case 2662:
case 1550:
case 3505:
case 2755:
case 290:
case 2235:
case 3688:
case 2229:
case 1526:
case 1894:
case 465:
case 2585:
case 1711:
case 3318:
case 3299:
case 256:
case 873:
case 3969:
case 1555:
case 3272:
case 1449:
case 2043:
case 622:
case 570:
case 2194:
case 1156:
case 3364:
case 2471:
case 1752:
case 450:
case 1717:
case 1590:
case 2993:
case 1064:
case 3345:
case 3764:
case 169:
case 2027:
case 617:
case 908:
case 1343:
case 3372:
case 3918:
case 3900:
case 2001:
case 2742:
case 738:
case 3531:
case 2265:
case 3751:
case 119:
case 3411:
case 2135:
case 2266:
case 3789:
case 3337:
case 1286:
case 3172:
case 1534:
case 2359:
case 3803:
case 2133:
case 1138:
case 1056:
case 2671:
case 1158:
case 29:
case 1194:
case 898:
case 2524:
case 3048:
case 1332:
case 874:
case 3578:
case 414:
case 1890:
case 434:
case 484:
case 2680:
case 3676:
case 2731:
case 2752:
case 2179:
case 2079:
case 497:
case 1496:
case 464:
case 1921:
case 3674:
case 2440:
case 2992:
case 350:
case 1393:
case 3922:
case 404:
case 1687:
case 639:
case 3185:
case 810:
case 2239:
case 2983:
case 848:
case 1739:
case 3394:
case 3788:
case 1858:
case 3332:
case 2415:
case 1044:
case 275:
case 3520:
case 2677:
case 1786:
case 2253:
case 2661:
case 3438:
case 3108:
case 3894:
case 3533:
case 1110:
case 2087:
case 469:
case 1860:
case 1862:
case 578:
case 1583:
case 3344:
case 1051:
case 1479:
case 3938:
case 1950:
case 1956:
case 3769:
case 425:
case 3187:
case 3319:
case 3000:
case 3936:
case 3368:
case 3661:
case 2212:
case 1073:
case 3658:
case 2234:
case 901:
case 3561:
case 3170:
case 233:
case 4089:
case 192:
case 365:
case 2000:
case 1466:
case 3451:
case 3750:
case 3691:
case 3386:
case 3741:
case 1934:
case 1886:
case 3064:
case 980:
case 3809:
case 2105:
case 3635:
case 511:
case 803:
case 2763:
case 3686:
case 3677:
case 126:
case 4024:
case 1539:
case 1128:
case 1557:
case 2575:
case 208:
case 849:
case 78:
case 314:
case 1307:
case 2566:
case 2421:
case 14:
case 3062:
case 3035:
case 824:
case 3896:
case 2022:
case 1779:
case 3282:
case 2399:
case 2963:
case 2727:
case 3829:
case 3971:
case 1714:
case 2610:
case 2941:
case 1101:
case 2969:
case 2942:
case 3543:
case 2349:
case 449:
case 4005:
case 147:
case 1592:
case 1987:
case 690:
case 3427:
case 2379:
case 206:
case 226:
case 1611:
case 3171:
case 4034:
case 3482:
case 911:
case 1173:
case 2928:
case 1864:
case 1969:
case 3028:
case 2693:
case 3510:
case 3731:
case 3620:
case 3759:
case 2404:
case 374:
case 2297:
case 942:
case 214:
case 2879:
case 1874:
case 861:
case 2226:
case 2587:
case 352:
case 3820:
case 2904:
case 792:
case 577:
case 1270:
case 993:
case 3307:
case 3579:
case 2189:
case 3113:
case 1362:
case 3507:
case 796:
case 149:
case 1776:
case 1033:
case 3099:
case 120:
case 1851:
case 3513:
case 3935:
case 4018:
case 2756:
case 3913:
case 3768:
case 1151:
case 3150:
case 2052:
case 812:
case 1509:
case 2759:
case 3887:
case 1957:
case 4083:
case 2981:
case 3467:
case 1129:
case 3675:
case 3656:
case 485:
case 2251:
case 656:
case 1308:
case 1233:
case 704:
case 1132:
case 1491:
case 3997:
case 1420:
case 771:
case 2640:
case 2305:
case 3186:
case 1361:
case 2551:
case 2959:
case 2139:
case 765:
case 737:
case 1241:
case 58:
case 789:
case 3718:
case 3342:
case 278:
case 2099:
case 1137:
case 1661:
case 3115:
case 2894:
case 3678:
case 1903:
case 4075:
case 1349:
case 3723:
case 3637:
case 750:
case 3535:
case 2439:
case 1579:
case 3269:
case 1465:
case 1978:
case 2238:
case 2580:
case 2015:
case 217:
case 1005:
case 4036:
case 672:
case 3211:
case 2441:
case 1083:
case 954:
case 2025:
case 3454:
case 322:
case 994:
case 2773:
case 327:
case 334:
case 3701:
case 2372:
case 1887:
case 306:
case 134:
case 932:
case 2475:
case 1527:
case 2648:
case 2351:
case 125:
case 1747:
case 661:
case 3891:
case 1492:
case 2620:
case 3009:
case 878:
case 524:
case 1303:
case 3607:
case 46:
case 3734:
case 963:
case 91:
case 3175:
case 2628:
case 330:
case 1801:
case 3839:
case 346:
case 2428:
case 777:
case 817:
case 1412:
case 3875:
case 3636:
case 310:
case 3155:
case 529:
case 3327:
case 1150:
case 296:
case 784:
case 2090:
case 1775:
case 3798:
case 3660:
case 42:
case 1568:
case 325:
case 1820:
case 3253:
case 900:
case 3104:
case 2264:
case 367:
case 2564:
case 2388:
case 919:
case 1900:
case 1146:
case 3027:
case 654:
case 3667:
case 112:
case 3140:
case 2311:
case 1258:
case 2949:
case 1649:
case 3041:
case 1793:
case 2042:
case 3428:
case 4071:
case 1200:
case 3966:
case 1065:
case 2855:
case 1001:
case 660:
case 3536:
case 879:
case 2672:
case 451:
case 2988:
case 3711:
case 2976:
case 1602:
case 1540:
case 264:
case 3347:
case 1046:
case 3208:
case 283:
case 104:
case 183:
case 1928:
case 3991:
case 2522:
case 3356:
case 1893:
case 1221:
case 2615:
case 2791:
case 3346:
case 3804:
case 3408:
case 108:
case 3248:
case 368:
case 1572:
case 5:
case 3181:
case 339:
case 3296:
case 132:
case 2600:
case 571:
case 2694:
case 1201:
case 458:
case 3051:
case 2531:
case 2607:
case 2077:
case 252:
case 2728:
case 1470:
case 3333:
case 3336:
case 3608:
case 907:
case 400:
case 3695:
case 1232:
case 1167:
case 10:
case 483:
case 2152:
case 653:
case 1326:
case 473:
case 476:
case 2852:
case 379:
case 382:
case 3515:
case 114:
case 3904:
case 2919:
case 769:
case 3228:
case 4092:
case 1444:
case 1918:
case 3771:
case 1235:
case 64:
case 2633:
case 2373:
case 151:
case 2376:
case 2191:
case 1188:
case 123:
case 1626:
case 2769:
case 2021:
case 2948:
case 1222:
case 3641:
case 1039:
case 2543:
case 2159:
case 3323:
case 1646:
case 1644:
case 2127:
case 1249:
case 2858:
case 2005:
case 3673:
case 3915:
case 3167:
case 1111:
case 2985:
case 971:
case 3743:
case 643:
case 1191:
case 378:
case 3166:
case 2950:
case 2741:
case 3907:
case 1968:
case 2109:
case 2137:
case 461:
case 3663:
case 4043:
case 897:
case 515:
case 415:
case 3838:
case 1920:
case 1524:
case 4063:
case 2696:
case 991:
case 3038:
case 2175:
case 80:
case 3761:
case 185:
case 2511:
case 1789:
case 1104:
case 2608:
case 3101:
case 2064:
case 3138:
case 3647:
case 1217:
case 549:
case 328:
case 268:
case 2571:
case 2565:
case 389:
case 1758:
case 2319:
case 563:
case 2460:
case 665:
case 1749:
case 3953:
case 1713:
case 951:
case 1314:
case 2864:
case 1728:
case 3018:
case 2089:
case 2162:
case 658:
case 2494:
case 2136:
case 1751:
case 2249:
case 1745:
case 2582:
case 2488:
case 182:
case 615:
case 2599:
case 892:
case 3931:
case 1017:
case 559:
case 2019:
case 3381:
case 2528:
case 2689:
case 498:
case 3634:
case 526:
case 1402:
case 905:
case 63:
case 3541:
case 3168:
case 1311:
case 852:
case 2883:
case 1426:
case 1427:
case 3651:
case 421:
case 3552:
case 222:
case 1879:
case 1849:
case 1501:
case 189:
case 266:
case 671:
case 3462:
case 2011:
case 642:
case 594:
case 3916:
case 2430:
case 3212:
case 2217:
case 1935:
case 1488:
case 1905:
case 2176:
case 1873:
case 1536:
case 2691:
case 2579:
case 1556:
case 731:
case 2073:
case 308:
case 3320:
case 535:
case 3843:
case 88:
case 1823:
case 295:
case 381:
case 282:
case 1136:
case 2751:
case 4059:
case 66:
case 3590:
case 3540:
case 3683:
case 127:
case 94:
case 397:
case 859:
case 411:
case 599:
case 614:
case 3978:
case 3700:
case 1107:
case 1211:
case 311:
case 3895:
case 262:
case 3111:
case 1248:
case 3720:
case 3868:
case 2434:
case 2504:
case 3349:
case 1281:
case 2966:
case 2787:
case 600:
case 2887:
case 1471:
case 255:
case 2803:
case 2258:
case 1057:
case 2371:
case 1974:
case 3142:
case 516:
case 1805:
case 2467:
case 3002:
case 3762:
case 3421:
case 2918:
case 2012:
case 1709:
case 1298:
case 2362:
case 2514:
case 3261:
case 2629:
case 2181:
case 236:
case 157:
case 2530:
case 2762:
case 2668:
case 4021:
case 1061:
case 2182:
case 2645:
case 846:
case 3300:
case 238:
case 443:
case 3221:
case 2901:
case 4013:
case 2626:
case 3090:
case 705:
case 2583:
case 1367:
case 2117:
case 297:
case 3619:
case 551:
case 3836:
case 3270:
case 2534:
case 513:
case 1930:
case 3886:
case 2445:
case 2448:
case 1433:
case 935:
case 1783:
case 4068:
case 111:
case 1867:
case 318:
case 1771:
case 4067:
case 2477:
case 722:
case 2080:
case 2210:
case 3247:
case 1952:
case 3628:
case 1811:
case 3098:
case 366:
case 1135:
case 815:
case 3196:
case 2778:
case 1911:
case 742:
case 2432:
case 3941:
case 3173:
case 1507:
case 2720:
case 166:
case 1836:
case 2584:
case 1126:
case 3439:
case 2126:
case 4044:
case 2915:
case 1050:
case 929:
case 1309:
case 3254:
case 2492:
case 3786:
case 2237:
case 248:
case 3393:
case 4026:
case 787:
case 3773:
case 3414:
case 2856:
case 3012:
case 3633:
case 1329:
case 1861:
case 2822:
case 2222:
case 3509:
case 1760:
case 2270:
case 613:
case 3294:
case 3220:
case 2745:
case 636:
case 891:
case 3490:
case 401:
case 3287:
case 1966:
case 1768:
case 1828:
case 851:
case 1392:
case 3964:
case 1942:
case 3047:
case 2166:
case 1019:
case 3158:
case 13:
case 2706:
case 1962:
case 2683:
case 2355:
case 2784:
case 582:
case 3206:
case 2037:
case 1891:
case 3985:
case 2944:
case 3081:
case 2304:
case 227:
case 3286:
case 2418:
case 3240:
case 2180:
case 916:
case 2334:
case 3738:
case 1795:
case 1984:
case 1732:
case 3031:
case 2862:
case 3025:
case 3021:
case 1264:
case 3058:
case 3097:
case 2911:
case 298:
case 1574:
case 1469:
case 3898:
case 2877:
case 2300:
case 1239:
case 2973:
case 1480:
case 2147:
case 3216:
case 913:
case 1708:
case 2838:
case 933:
case 1216:
case 385:
case 2326:
case 821:
case 2545:
case 1365:
case 2201:
case 2313:
case 2519:
case 105:
case 2018:
case 715:
case 3753:
case 1951:
case 2931:
case 2317:
case 3121:
case 679:
case 454:
case 3758:
case 276:
case 3754:
case 1706:
case 3901:
case 1885:
case 1289:
case 1278:
case 30:
case 3888:
case 2195:
case 3259:
case 161:
case 2480:
case 3203:
case 3019:
case 3881:
case 553:
case 2723:
case 2402:
case 35:
case 565:
case 48:
case 1369:
case 1980:
case 1219:
case 2889:
case 2120:
case 1842:
case 2451:
case 3131:
case 775:
case 2227:
case 761:
case 3630:
case 2719:
case 1330:
case 956:
case 1672:
case 2024:
case 3301:
case 1880:
case 3040:
case 3403:
case 2700:
case 3539:
case 1273:
case 1366:
case 970:
case 1192:
case 868:
case 3056:
case 478:
case 259:
case 1731:
case 1094:
case 2962:
case 517:
case 3748:
case 4061:
case 623:
case 218:
case 1164:
case 1504:
case 3453:
case 3387:
case 1829:
case 1792:
case 349:
case 2442:
case 1345:
case 1068:
case 2849:
case 419:
case 1960:
case 437:
case 1452:
case 3616:
case 1563:
case 1904:
case 3392:
case 1456:
case 632:
case 4009:
case 3120:
case 723:
case 3437:
case 1196:
case 823:
case 1331:
case 647:
case 2407:
case 2129:
case 1755:
case 3086:
case 305:
case 2903:
case 1254:
case 2750:
case 246:
case 3222:
case 1325:
case 3072:
case 2435:
case 3522:
case 2707:
case 3006:
case 3719:
case 1901:
case 640:
case 2738:
case 3398:
case 3772:
case 2279:
case 2625:
case 203:
case 3476:
case 1397:
case 3499:
case 3424:
case 3827:
case 1267:
case 2837:
case 3348:
case 1663:
case 886:
case 2984:
case 3317:
case 2912:
case 3373:
case 1766:
case 1359:
case 768:
case 1442:
case 3193:
case 2532:
case 489:
case 767:
case 2895:
case 910:
case 2310:
case 3831:
case 3909:
case 552:
case 1688:
case 2998:
case 1757:
case 988:
case 1614:
case 858:
case 3010:
case 1703:
case 1304:
case 3559:
case 1585:
case 2288:
case 1006:
case 406:
case 1730:
case 2828:
case 3687:
case 3445:
case 528:
case 1651:
case 3844:
case 2398:
case 1182:
case 2456:
case 2736:
case 2934:
case 2020:
case 562:
case 1762:
case 2413:
case 668:
case 2048:
case 1865:
case 831:
case 1113:
case 3592:
case 57:
case 1577:
case 1954:
case 153:
case 1360:
case 1031:
case 2554:
case 2263:
case 906:
case 1981:
case 1847:
case 2974:
case 1947:
case 2767:
case 3851:
case 1692:
case 1108:
case 3937:
case 9:
case 1077:
case 1630:
case 3927:
case 3763:
case 1282:
case 1088:
case 3755:
case 221:
case 3474:
case 1093:
case 3893:
case 341:
case 673:
case 2074:
case 3805:
case 1633:
case 1809:
case 808:
case 904:
case 3595:
case 2920:
case 3785:
case 2708:
case 463:
case 1640:
case 1638:
case 3584:
case 1291:
case 719:
case 3795:
case 1549:
case 1773:
case 1292:
case 4085:
case 3613:
case 2848:
case 2260:
case 998:
case 3260:
case 2664:
case 2332:
case 3692:
case 1342:
case 982:
case 2348:
case 543:
case 1701:
case 2069:
case 1718:
case 3011:
case 941:
case 133:
case 1871:
case 1733:
case 1804:
case 505:
case 2282:
case 2943:
case 3861:
case 3727:
case 1131:
case 3797:
case 2888:
case 170:
case 403:
case 1671:
case 34:
case 4006:
case 1139:
case 2143:
case 3878:
case 1084:
case 2586:
case 2577:
case 676:
case 1305:
case 2116:
case 1411:
case 1147:
case 2081:
case 3976:
case 4016:
case 224:
case 1833:
case 1374:
case 1382:
case 2890:
case 3749:
case 399:
case 3005:
case 277:
case 620:
case 3447:
case 2083:
case 593:
case 2446:
case 1744:
case 31:
case 914:
case 3304:
case 1422:
case 1570:
case 3416:
case 1684:
case 2550:
case 1669:
case 1652:
case 4031:
case 3819:
case 3983:
case 2593:
case 1406:
case 2072:
case 794:
case 3218:
case 3652:
case 1662:
case 3237:
case 1897:
case 2417:
case 1702:
case 1596:
case 299:
case 2712:
case 396:
case 4088:
case 2826:
case 953:
case 1347:
case 191:
case 2365:
case 3008:
case 375:
case 1038:
case 332:
case 3402:
case 3664:
case 2964:
case 973:
case 3560:
case 962:
case 2997:
case 2213:
case 1130:
case 621:
case 3308:
case 1338:
case 1756:
case 1505:
case 2255:
case 1515:
case 3472:
case 2344:
case 589:
case 2760:
case 269:
case 2197:
case 205:
case 317:
case 2774:
case 2529:
case 1940:
case 3162:
case 3655:
case 1036:
case 1784:
case 1748:
case 4039:
case 1460:
case 2506:
case 2262:
case 3814:
case 2725:
case 3363:
case 1569:
case 3783:
case 3331:
case 3816:
case 1825:
case 1953:
case 2068:
case 2938:
case 2869:
case 628:
case 3571:
case 1510:
case 3469:
case 2749:
case 239:
case 2821:
case 2232:
case 1423:
case 1715:
case 420:
case 2242:
case 97:
case 2204:
case 3160:
case 816:
case 2703:
case 3328:
case 2845:
case 2085:
case 1800:
case 939:
case 1518:
case 718:
case 3273:
case 1676:
case 3124:
case 212:
case 885:
case 3136:
case 3330:
case 969:
case 1591:
case 3322:
case 369:
case 3213:
case 1813:
case 2799:
case 2323:
case 2202:
case 2618:
case 3826:
case 3434:
case 724:
case 2111:
case 2487:
case 2299:
case 1102:
case 3450:
case 2038:
case 2294:
case 3486:
case 1161:
case 3662:
case 2882:
case 1157:
case 2190:
case 1333:
case 2536:
case 493:
case 1912:
case 2617:
case 2616:
case 45:
case 2772:
case 2403:
case 102:
case 2474:
case 708:
case 1735:
case 2603:
case 1409:
case 2273:
case 1277:
case 3944:
case 1838:
case 3003:
case 2503:
case 27:
case 1575:
case 2793:
case 584:
case 3518:
case 3487:
case 3353:
case 2500:
case 2776:
case 2063:
case 2481:
case 3698:
case 1983:
case 2498:
case 3419:
case 1475:
case 3503:
case 359:
case 1797:
case 1047:
case 2682:
case 2806:
case 1439:
case 3024:
case 1030:
case 1841:
case 388:
case 2347:
case 1103:
case 135:
case 1171:
case 556:
case 263:
case 3374:
case 2057:
case 1260:
case 1965:
case 2405:
case 3840:
case 1255:
case 554:
case 3481:
case 3821:
case 2951:
case 1302:
case 2930:
case 3757:
case 711:
case 4002:
case 3920:
case 3315:
case 3059:
case 1770:
case 3864:
case 3850:
case 2860:
case 3694:
case 2360:
case 3183:
case 1334:
case 1593:
case 2825:
case 249:
case 3752:
case 1116:
case 174:
case 832:
case 2144:
case 270:
case 1185:
case 2118:
case 3075:
case 398:
case 118:
case 1659:
case 307:
case 1288:
case 2241:
case 2094:
case 2221:
case 3132:
case 1011:
case 3954:
case 3164:
case 3696:
case 3188:
case 1375:
case 2071:
case 3217:
case 1949:
case 213:
case 1597:
case 2368:
case 807:
case 1580:
case 3638:
case 1601:
case 949:
case 3448:
case 2990:
case 586:
case 152:
case 2324:
case 55:
case 1048:
case 3824:
case 841:
case 3388:
case 3511:
case 422:
case 744:
case 2606:
case 4028:
case 1695:
case 2924:
case 1627:
case 780:
case 3302:
case 240:
case 2657:
case 3972:
case 544:
case 2501:
case 522:
case 2757:
case 1322:
case 1296:
case 3123:
case 2636:
case 2839:
case 1605:
case 2188:
case 811:
case 2278:
case 1429:
case 3787:
case 1247:
case 146:
case 1195:
case 3615:
case 2151:
case 4080:
case 1564:
case 2141:
case 575:
case 1436:
case 243:
case 100:
case 1600:
case 2479:
case 2092:
case 427:
case 2065:
case 1324:
case 3252:
case 990:
case 3862:
case 2556:
case 1796:
case 193:
case 128:
case 3022:
case 957:
case 1368:
case 1567:
case 1696:
case 2866:
case 2173:
case 3249:
case 3311:
case 3461:
case 560:
case 1198:
case 3063:
case 3712:
case 2555:
case 992:
case 430:
case 2935:
case 3854:
case 3070:
case 1430:
case 3112:
case 187:
case 2007:
case 139:
case 2527:
case 2654:
case 1481:
case 1381:
case 1827:
case 1576:
case 0:
case 635:
case 3668:
case 3792:
case 1660:
case 1000:
case 3280:
case 2469:
case 2786:
case 685:
case 4042:
case 3479:
case 674:
case 1844:
case 2630:
case 2567:
case 782:
case 3066:
case 1490:
case 2:
case 959:
case 2497:
case 2461:
case 1581:
case 3780:
case 1959:
case 1169:
case 2369:
case 1698:
case 2878:
case 1096:
case 1407:
case 2382:
case 1377:
case 2627:
case 689:
case 2634:
case 1689:
case 1721:
case 508:
case 3057:
case 1053:
case 766:
case 2054:
case 3030:
case 3706:
case 591:
case 3715:
case 3602:
case 1069:
case 1323:
case 3139:
case 2655:
case 1999:
case 3293:
case 2710:
case 2209:
case 1508:
case 1210:
case 790:
case 2130:
case 3800:
case 1680:
case 1612:
case 2739:
case 3176:
case 3874:
case 1165:
case 3977:
case 1944:
case 1279:
case 2740:
case 550:
case 122:
case 3468:
case 2891:
case 1078:
case 2252:
case 21:
case 545:
case 664:
case 1922:
case 1530:
case 254:
case 417:
case 4004:
case 452:
case 4000:
case 2495:
case 3925:
case 2692:
case 2819:
case 2926:
case 514:
case 877:
case 754:
case 3609:
case 344:
case 3586:
case 3470:
case 3029:
case 3973:
case 2517:
case 1632:
case 1883:
case 1794:
case 762:
case 2843:
case 3815:
case 4078:
case 2164:
case 1716:
case 3988:
case 893:
case 1283:
case 19:
case 3642:
case 3968:
case 3128:
case 2559:
case 488:
case 2675:
case 3130:
case 3159:
case 1310:
case 2102:
case 3889:
case 242:
case 781:
case 2462:
case 580:
case 1295:
case 4062:
case 3564:
case 3456:
case 2177:
case 2576:
case 2101:
case 3324:
case 1589:
case 500:
case 802:
case 1319:
case 1525:
case 2478:
case 207:
case 3553:
case 2834:
case 3375:
case 1559:
case 1882:
case 1437:
case 2339:
case 324:
case 2831:
case 1916:
case 938:
case 3726:
case 3080:
case 3928:
case 4023:
case 1774:
case 4030:
case 1994:
case 1929:
case 1403:
case 1620:
case 424:
case 3557:
case 337:
case 1119:
case 2412:
case 774:
case 1114:
case 501:
case 2814:
case 618:
case 2026:
case 2298:
case 795:
case 1675:
case 3358:
case 2695:
case 4095:
case 3357:
case 2794:
case 860:
case 521:
case 3974:
case 2160:
case 384:
case 1734:
case 312:
case 825:
case 2754:
case 3234:
case 1988:
case 1489:
case 1297:
case 3682:
case 2454:
case 3817:
case 1541:
case 3626:
case 3182:
case 229:
case 2518:
case 2863:
case 2426:
case 3177:
case 1220:
case 539:
case 3441:
case 1029:
case 710:
case 884:
case 3649:
case 3548:
case 3796:
case 3860:
case 1071:
case 3243:
case 2513:
case 291:
case 3100:
case 1450:
case 1963:
case 3951:
case 216:
case 343:
case 3144:
case 3483:
case 1187:
case 4050:
case 2701:
case 301:
case 2387:
case 2225:
case 3501:
case 1599:
case 1511:
case 1932:
case 1457:
case 180:
case 3760:
case 741:
case 3514:
case 2318:
case 1616:
case 1558:
case 682:
case 2172:
case 3007:
case 71:
case 372:
case 3940:
case 4064:
case 3369:
case 3623:
case 1852:
case 3276:
case 605:
case 800:
case 2639:
case 3782:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1683918001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,];
var gg_b = "1683918001/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
