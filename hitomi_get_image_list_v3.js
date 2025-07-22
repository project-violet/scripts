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
case 3782:
case 1531:
case 406:
case 844:
case 1524:
case 3987:
case 254:
case 1347:
case 1738:
case 1183:
case 1815:
case 991:
case 1740:
case 22:
case 1539:
case 2275:
case 1537:
case 233:
case 1698:
case 3670:
case 3448:
case 3080:
case 3210:
case 3430:
case 741:
case 1042:
case 2393:
case 2615:
case 73:
case 1144:
case 485:
case 4023:
case 699:
case 212:
case 3244:
case 3822:
case 2898:
case 1887:
case 50:
case 1246:
case 309:
case 1889:
case 2867:
case 2455:
case 3146:
case 3915:
case 708:
case 1130:
case 3248:
case 2950:
case 2352:
case 2894:
case 3230:
case 2861:
case 2079:
case 1528:
case 1519:
case 4003:
case 1721:
case 767:
case 2051:
case 1667:
case 1517:
case 3802:
case 584:
case 2681:
case 993:
case 1835:
case 24:
case 3483:
case 85:
case 2059:
case 2372:
case 1694:
case 3402:
case 1655:
case 3388:
case 932:
case 1930:
case 2065:
case 3946:
case 4082:
case 376:
case 3883:
case 3115:
case 1085:
case 28:
case 2774:
case 3580:
case 1215:
case 425:
case 2467:
case 2298:
case 3723:
case 913:
case 3844:
case 1039:
case 1487:
case 290:
case 3745:
case 1024:
case 2754:
case 3663:
case 3513:
case 1281:
case 2557:
case 1011:
case 2559:
case 80:
case 3026:
case 3830:
case 2261:
case 3848:
case 911:
case 360:
case 1289:
case 3422:
case 2551:
case 1846:
case 930:
case 1019:
case 2269:
case 2963:
case 3187:
case 1028:
case 3343:
case 2758:
case 2579:
case 292:
case 1415:
case 884:
case 1944:
case 974:
case 2571:
case 1910:
case 2778:
case 3703:
case 4016:
case 55:
case 1339:
case 1337:
case 1748:
case 843:
case 821:
case 3407:
case 4081:
case 808:
case 1690:
case 2195:
case 1324:
case 1547:
case 4087:
case 3746:
case 1549:
case 1308:
case 75:
case 3227:
case 724:
case 1127:
case 3088:
case 1129:
case 2462:
case 3438:
case 3218:
case 1803:
case 3414:
case 1086:
case 2890:
case 1436:
case 1385:
case 558:
case 3945:
case 1500:
case 3306:
case 2593:
case 1121:
case 3005:
case 1114:
case 1304:
case 107:
case 3434:
case 3421:
case 1416:
case 3240:
case 3418:
case 3238:
case 2763:
case 3182:
case 2645:
case 1012:
case 499:
case 186:
case 1138:
case 1783:
case 744:
case 583:
case 1744:
case 3201:
case 1520:
case 1311:
case 3326:
case 83:
case 272:
case 823:
case 3207:
case 3674:
case 168:
case 2978:
case 1107:
case 1319:
case 1710:
case 900:
case 994:
case 251:
case 1940:
case 971:
case 1000:
case 2566:
case 2616:
case 508:
case 2158:
case 3787:
case 1423:
case 4046:
case 3982:
case 3789:
case 3380:
case 952:
case 1914:
case 2256:
case 3936:
case 647:
case 3781:
case 1049:
case 3821:
case 1203:
case 914:
case 3695:
case 3313:
case 436:
case 3103:
case 858:
case 784:
case 146:
case 679:
case 3735:
case 3818:
case 203:
case 645:
case 248:
case 2276:
case 625:
case 2862:
case 3715:
case 316:
case 950:
case 3840:
case 228:
case 2351:
case 2995:
case 2174:
case 464:
case 3543:
case 3525:
case 2357:
case 2359:
case 1836:
case 1403:
case 3814:
case 3145:
case 3809:
case 1934:
case 1921:
case 2796:
case 3801:
case 2770:
case 1927:
case 1722:
case 541:
case 2377:
case 1223:
case 1929:
case 973:
case 2636:
case 1918:
case 3123:
case 1805:
case 990:
case 1383:
case 3943:
case 3249:
case 3003:
case 2363:
case 3247:
case 1888:
case 3925:
case 195:
case 3241:
case 696:
case 4033:
case 3832:
case 2868:
case 1521:
case 1719:
case 1534:
case 518:
case 2058:
case 3200:
case 2688:
case 197:
case 87:
case 3726:
case 1527:
case 1668:
case 1518:
case 71:
case 3045:
case 1538:
case 274:
case 1540:
case 4080:
case 1699:
case 1731:
case 3582:
case 1697:
case 1724:
case 1843:
case 3988:
case 385:
case 3400:
case 1330:
case 1739:
case 1691:
case 3023:
case 1348:
case 1664:
case 1509:
case 4013:
case 3441:
case 3812:
case 1507:
case 306:
case 2897:
case 2074:
case 2899:
case 742:
case 2172:
case 898:
case 387:
case 3447:
case 2625:
case 2499:
case 2497:
case 3412:
case 3232:
case 2268:
case 1027:
case 3733:
case 3188:
case 2350:
case 2759:
case 1029:
case 1186:
case 1205:
case 2558:
case 2464:
case 3286:
case 3847:
case 1034:
case 3315:
case 3693:
case 459:
case 1484:
case 3849:
case 3105:
case 2751:
case 1443:
case 4026:
case 363:
case 2779:
case 1920:
case 818:
case 3503:
case 2578:
case 2396:
case 460:
case 57:
case 2771:
case 291:
case 1425:
case 92:
case 293:
case 3381:
case 3125:
case 3143:
case 3780:
case 3389:
case 356:
case 1949:
case 1947:
case 1009:
case 3335:
case 3486:
case 1405:
case 3713:
case 2554:
case 598:
case 3432:
case 4006:
case 2468:
case 476:
case 1112:
case 1038:
case 2297:
case 1900:
case 3417:
case 820:
case 2752:
case 2957:
case 2070:
case 3428:
case 2492:
case 948:
case 580:
case 3224:
case 2951:
case 3411:
case 214:
case 4043:
case 1583:
case 1426:
case 2096:
case 1124:
case 2613:
case 2050:
case 1720:
case 2977:
case 1329:
case 2772:
case 252:
case 2273:
case 1327:
case 4084:
case 1:
case 798:
case 3285:
case 1660:
case 1321:
case 2165:
case 3316:
case 3106:
case 271:
case 3015:
case 59:
case 2680:
case 399:
case 582:
case 3204:
case 3679:
case 1741:
case 3336:
case 1530:
case 1104:
case 4088:
case 1548:
case 3035:
case 273:
case 1747:
case 822:
case 1338:
case 1340:
case 3671:
case 3546:
case 3980:
case 269:
case 1301:
case 3659:
case 3657:
case 3126:
case 1111:
case 2633:
case 77:
case 3211:
case 3431:
case 1700:
case 901:
case 2292:
case 1119:
case 2793:
case 3228:
case 1307:
case 3217:
case 3437:
case 189:
case 2453:
case 3180:
case 2260:
case 3824:
case 3242:
case 2358:
case 520:
case 1280:
case 1142:
case 439:
case 970:
case 1010:
case 3837:
case 1673:
case 1044:
case 2853:
case 149:
case 676:
case 175:
case 3725:
case 2550:
case 2378:
case 2063:
case 3113:
case 1083:
case 1917:
case 1806:
case 1712:
case 542:
case 364:
case 1213:
case 3808:
case 953:
case 3784:
case 177:
case 1911:
case 89:
case 1924:
case 882:
case 3589:
case 1786:
case 1931:
case 3705:
case 2766:
case 951:
case 294:
case 3804:
case 1233:
case 660:
case 522:
case 3133:
case 972:
case 2157:
case 51:
case 2892:
case 1985:
case 319:
case 2965:
case 3345:
case 129:
case 3817:
case 3906:
case 3323:
case 3535:
case 2460:
case 3811:
case 2177:
case 1826:
case 659:
case 2179:
case 3774:
case 2580:
case 178:
case 1610:
case 3366:
case 276:
case 3065:
case 829:
case 2388:
case 262:
case 2663:
case 3196:
case 3494:
case 2745:
case 1296:
case 2810:
case 390:
case 1270:
case 3298:
case 182:
case 3170:
case 3469:
case 3758:
case 1092:
case 19:
case 491:
case 3963:
case 906:
case 717:
case 260:
case 2848:
case 3261:
case 3559:
case 987:
case 1975:
case 1756:
case 2325:
case 1161:
case 2533:
case 1399:
case 1790:
case 875:
case 3778:
case 1397:
case 2703:
case 849:
case 1450:
case 3646:
case 1364:
case 3577:
case 1776:
case 392:
case 985:
case 1955:
case 1850:
case 1961:
case 333:
case 1553:
case 2736:
case 1967:
case 32:
case 1762:
case 529:
case 354:
case 1263:
case 2987:
case 2989:
case 2782:
case 2696:
case 979:
case 3898:
case 2244:
case 2822:
case 1870:
case 312:
case 2650:
case 2935:
case 122:
case 3255:
case 671:
case 3615:
case 4054:
case 2506:
case 1896:
case 2448:
case 2230:
case 3861:
case 3079:
case 3894:
case 3950:
case 577:
case 927:
case 2915:
case 3071:
case 3869:
case 673:
case 142:
case 3455:
case 209:
case 2444:
case 3795:
case 2033:
case 3372:
case 413:
case 3057:
case 1998:
case 2483:
case 3059:
case 3681:
case 2802:
case 310:
case 2716:
case 3687:
case 120:
case 3689:
case 2588:
case 1761:
case 1794:
case 1156:
case 1627:
case 2380:
case 999:
case 2787:
case 3616:
case 3566:
case 1962:
case 1258:
case 3276:
case 691:
case 303:
case 2818:
case 2827:
case 2103:
case 815:
case 1190:
case 2313:
case 2695:
case 3290:
case 2821:
case 1478:
case 3490:
case 3359:
case 597:
case 3750:
case 729:
case 2525:
case 3357:
case 3174:
case 3995:
case 328:
case 3476:
case 1609:
case 216:
case 301:
case 402:
case 3636:
case 1458:
case 1614:
case 3377:
case 1798:
case 3052:
case 2801:
case 3682:
case 3796:
case 1254:
case 2809:
case 3456:
case 964:
case 2746:
case 613:
case 3603:
case 2678:
case 450:
case 3974:
case 517:
case 1353:
case 2005:
case 3593:
case 469:
case 2306:
case 2221:
case 3890:
case 2414:
case 2234:
case 1878:
case 3462:
case 2218:
case 3876:
case 2923:
case 1068:
case 1373:
case 2429:
case 2427:
case 3645:
case 2182:
case 3763:
case 2238:
case 1097:
case 3958:
case 897:
case 2084:
case 1775:
case 2434:
case 674:
case 4050:
case 3623:
case 1091:
case 789:
case 366:
case 936:
case 2209:
case 414:
case 1990:
case 2674:
case 1976:
case 2326:
case 2201:
case 1495:
case 630:
case 3751:
case 1600:
case 2693:
case 3166:
case 857:
case 3464:
case 3558:
case 3491:
case 1556:
case 3350:
case 3759:
case 2733:
case 505:
case 2188:
case 2412:
case 2232:
case 3757:
case 3268:
case 183:
case 492:
case 1168:
case 3499:
case 245:
case 2800:
case 3771:
case 391:
case 1649:
case 3396:
case 279:
case 3578:
case 3777:
case 507:
case 3370:
case 3972:
case 1576:
case 263:
case 737:
case 1367:
case 2780:
case 3574:
case 490:
case 404:
case 2387:
case 2143:
case 1361:
case 1852:
case 225:
case 393:
case 628:
case 3297:
case 1062:
case 181:
case 735:
case 909:
case 4065:
case 3554:
case 2652:
case 1872:
case 3264:
case 2820:
case 1164:
case 2036:
case 2523:
case 227:
case 1191:
case 2832:
case 634:
case 3868:
case 4059:
case 2241:
case 4057:
case 313:
case 2925:
case 868:
case 1375:
case 141:
case 123:
case 805:
case 410:
case 4051:
case 3363:
case 3078:
case 2943:
case 2249:
case 1090:
case 2420:
case 1866:
case 653:
case 4077:
case 1964:
case 1632:
case 886:
case 670:
case 2984:
case 1355:
case 2726:
case 1997:
case 1792:
case 1999:
case 4071:
case 1293:
case 3605:
case 2666:
case 3193:
case 976:
case 412:
case 1753:
case 2536:
case 2400:
case 3684:
case 3152:
case 688:
case 1493:
case 2988:
case 3054:
case 959:
case 2905:
case 374:
case 1562:
case 3966:
case 2045:
case 3891:
case 2220:
case 1272:
case 666:
case 651:
case 3864:
case 287:
case 3172:
case 2449:
case 3899:
case 454:
case 3643:
case 672:
case 42:
case 3765:
case 2812:
case 330:
case 2441:
case 2706:
case 960:
case 311:
case 1356:
case 1471:
case 2725:
case 3853:
case 1608:
case 4052:
case 2839:
case 1479:
case 2743:
case 2824:
case 837:
case 2180:
case 1075:
case 1598:
case 3570:
case 1791:
case 4072:
case 690:
case 1764:
case 2808:
case 1637:
case 3873:
case 1457:
case 996:
case 1865:
case 2885:
case 10:
case 1992:
case 2113:
case 1631:
case 401:
case 3063:
case 835:
case 428:
case 3378:
case 1797:
case 403:
case 3157:
case 3626:
case 86:
case 2133:
case 1594:
case 2581:
case 2804:
case 1569:
case 1619:
case 394:
case 3766:
case 236:
case 2589:
case 138:
case 2442:
case 3179:
case 1279:
case 2535:
case 2323:
case 3171:
case 2817:
case 2906:
case 2345:
case 755:
case 3965:
case 1271:
case 4093:
case 692:
case 2828:
case 124:
case 3395:
case 451:
case 3096:
case 15:
case 314:
case 2224:
case 633:
case 2428:
case 472:
case 62:
case 2239:
case 3070:
case 2933:
case 3957:
case 3752:
case 3959:
case 1575:
case 612:
case 3680:
case 1265:
case 371:
case 488:
case 3165:
case 1173:
case 3979:
case 2208:
case 1555:
case 3977:
case 4066:
case 56:
case 939:
case 2382:
case 2546:
case 1851:
case 1362:
case 2035:
case 2679:
case 1859:
case 2677:
case 2204:
case 1857:
case 1465:
case 2439:
case 2913:
case 2437:
case 3793:
case 916:
case 350:
case 1067:
case 64:
case 707:
case 1871:
case 2431:
case 2211:
case 2081:
case 1877:
case 1094:
case 2657:
case 2126:
case 453:
case 2659:
case 3293:
case 2728:
case 3686:
case 3792:
case 3997:
case 516:
case 1193:
case 2912:
case 2534:
case 2100:
case 1605:
case 3991:
case 2668:
case 2344:
case 3632:
case 3964:
case 3056:
case 2711:
case 1688:
case 3355:
case 132:
case 3090:
case 539:
case 2805:
case 2149:
case 420:
case 2704:
case 2141:
case 698:
case 3076:
case 295:
case 1897:
case 1074:
case 343:
case 1643:
case 1899:
case 111:
case 130:
case 3773:
case 1891:
case 709:
case 935:
case 2884:
case 1172:
case 2501:
case 1625:
case 2731:
case 2724:
case 4060:
case 2538:
case 3612:
case 2540:
case 2739:
case 2691:
case 3753:
case 2348:
case 3493:
case 2825:
case 1684:
case 422:
case 67:
case 3641:
case 1370:
case 2322:
case 1777:
case 3398:
case 816:
case 191:
case 1771:
case 49:
case 3647:
case 2425:
case 1578:
case 1396:
case 839:
case 2027:
case 1759:
case 2029:
case 2132:
case 1499:
case 2288:
case 383:
case 2034:
case 3600:
case 3266:
case 2205:
case 4073:
case 1264:
case 2405:
case 2014:
case 3164:
case 2284:
case 1993:
case 596:
case 478:
case 1297:
case 2038:
case 1468:
case 2941:
case 2001:
case 3361:
case 482:
case 759:
case 2243:
case 3760:
case 1574:
case 2544:
case 2329:
case 1772:
case 2327:
case 1273:
case 3555:
case 152:
case 809:
case 2813:
case 1680:
case 3265:
case 2206:
case 2510:
case 2321:
case 1165:
case 1971:
case 3642:
case 2334:
case 3153:
case 2139:
case 1492:
case 61:
case 1752:
case 3098:
case 1957:
case 1070:
case 35:
case 1563:
case 640:
case 2131:
case 559:
case 2880:
case 1951:
case 1860:
case 2426:
case 2583:
case 2226:
case 2301:
case 620:
case 3094:
case 1453:
case 289:
case 2128:
case 498:
case 3871:
case 3069:
case 2309:
case 2307:
case 150:
case 2104:
case 173:
case 3857:
case 2833:
case 957:
case 2406:
case 4068:
case 2741:
case 169:
case 2002:
case 3362:
case 2340:
case 2083:
case 2806:
case 418:
case 3865:
case 3457:
case 2433:
case 2919:
case 1378:
case 509:
case 1063:
case 3390:
case 1596:
case 1570:
case 3376:
case 3598:
case 2911:
case 277:
case 1873:
case 2653:
case 3791:
case 2280:
case 3160:
case 2142:
case 1260:
case 3055:
case 275:
case 1550:
case 2904:
case 2044:
case 986:
case 2502:
case 1171:
case 862:
case 2985:
case 1177:
case 1179:
case 680:
case 3277:
case 3604:
case 2048:
case 3973:
case 2030:
case 3617:
case 1766:
case 3569:
case 1374:
case 3628:
case 2931:
case 2786:
case 3594:
case 1159:
case 69:
case 3611:
case 905:
case 1626:
case 739:
case 3259:
case 2732:
case 3257:
case 3768:
case 2300:
case 2110:
case 1393:
case 536:
case 2446:
case 3870:
case 3155:
case 1898:
case 1255:
case 2508:
case 2144:
case 2347:
case 154:
case 3969:
case 408:
case 3762:
case 2183:
case 2738:
case 12:
case 2349:
case 2740:
case 443:
case 519:
case 2531:
case 1163:
case 624:
case 3622:
case 65:
case 3175:
case 3850:
case 2341:
case 465:
case 2721:
case 2519:
case 110:
case 785:
case 2517:
case 4090:
case 43:
case 320:
case 2528:
case 1687:
case 1059:
case 3998:
case 2320:
case 2661:
case 1057:
case 1372:
case 2727:
case 2835:
case 1681:
case 441:
case 423:
case 1455:
case 1867:
case 1869:
case 1071:
case 2889:
case 1950:
case 1894:
case 899:
case 1861:
case 1079:
case 1635:
case 4056:
case 2504:
case 836:
case 3270:
case 747:
case 3198:
case 1469:
case 60:
case 2122:
case 1170:
case 1855:
case 1467:
case 382:
case 2481:
case 1754:
case 2031:
case 1461:
case 104:
case 1494:
case 3073:
case 2930:
case 2655:
case 1150:
case 481:
case 2085:
case 4062:
case 2215:
case 2435:
case 1774:
case 2386:
case 2542:
case 1065:
case 3560:
case 3630:
case 2944:
case 756:
case 192:
case 3776:
case 483:
case 237:
case 1577:
case 2415:
case 2235:
case 3397:
case 1646:
case 3450:
case 1571:
case 2312:
case 1261:
case 3496:
case 235:
case 638:
case 2011:
case 1559:
case 727:
case 1269:
case 599:
case 2028:
case 39:
case 1267:
case 2289:
case 2983:
case 1498:
case 3169:
case 2287:
case 2846:
case 3167:
case 2019:
case 3470:
case 2656:
case 2127:
case 2129:
case 3373:
case 525:
case 2308:
case 2032:
case 3068:
case 2482:
case 2118:
case 1066:
case 2134:
case 1365:
case 885:
case 2086:
case 1890:
case 2436:
case 1954:
case 1856:
case 2339:
case 4094:
case 444:
case 2748:
case 4061:
case 3353:
case 3295:
case 134:
case 1974:
case 2690:
case 2331:
case 1195:
case 1603:
case 641:
case 398:
case 172:
case 3755:
case 1572:
case 3976:
case 3495:
case 2823:
case 2744:
case 424:
case 2710:
case 547:
case 45:
case 2845:
case 151:
case 2317:
case 665:
case 1978:
case 268:
case 207:
case 1552:
case 3956:
case 2236:
case 2416:
case 3091:
case 2012:
case 1645:
case 286:
case 545:
case 3162:
case 2138:
case 929:
case 37:
case 3874:
case 667:
case 1763:
case 2049:
case 825:
case 2047:
case 3278:
case 2203:
case 861:
case 148:
case 2041:
case 3176:
case 2901:
case 585:
case 3895:
case 2586:
case 3767:
case 506:
case 2342:
case 3634:
case 827:
case 683:
case 1093:
case 3360:
case 3962:
case 9:
case 1256:
case 3618:
case 2532:
case 3454:
case 587:
case 3156:
case 764:
case 3761:
case 3597:
case 1154:
case 3599:
case 3640:
case 2934:
case 3254:
case 3638:
case 2662:
case 3564:
case 3614:
case 3458:
case 2918:
case 4055:
case 1636:
case 736:
case 1379:
case 2722:
case 1052:
case 257:
case 2929:
case 2223:
case 3798:
case 226:
case 863:
case 3274:
case 40:
case 1476:
case 128:
case 1490:
case 4075:
case 3478:
case 845:
case 255:
case 879:
case 658:
case 4017:
case 179:
case 4019:
case 3425:
case 2649:
case 435:
case 78:
case 801:
case 3322:
case 2641:
case 940:
case 2576:
case 3205:
case 3186:
case 1849:
case 1105:
case 3021:
case 1693:
case 566:
case 1286:
case 3018:
case 3132:
case 922:
case 437:
case 1841:
case 3029:
case 4004:
case 1188:
case 790:
case 1082:
case 3038:
case 4085:
case 3302:
case 3112:
case 3040:
case 1036:
case 2164:
case 127:
case 1523:
case 1335:
case 3014:
case 553:
case 3405:
case 317:
case 2466:
case 258:
case 1143:
case 920:
case 3009:
case 2760:
case 3947:
case 848:
case 4024:
case 4031:
case 803:
case 3007:
case 46:
case 161:
case 3949:
case 156:
case 570:
case 3243:
case 792:
case 2361:
case 4037:
case 315:
case 2394:
case 2852:
case 3941:
case 1672:
case 626:
case 4039:
case 3527:
case 2355:
case 1984:
case 2056:
case 397:
case 3518:
case 3668:
case 3344:
case 2632:
case 2452:
case 3534:
case 501:
case 3100:
case 3310:
case 3912:
case 1666:
case 1516:
case 733:
case 1200:
case 2792:
case 2686:
case 978:
case 2999:
case 2076:
case 395:
case 1925:
case 2375:
case 3141:
case 223:
case 241:
case 851:
case 3704:
case 1241:
case 3147:
case 3383:
case 712:
case 3149:
case 2472:
case 1886:
case 872:
case 23:
case 1943:
case 265:
case 187:
case 1447:
case 3120:
case 1449:
case 1220:
case 3708:
case 106:
case 1441:
case 3785:
case 99:
case 208:
case 221:
case 605:
case 1400:
case 185:
case 2493:
case 710:
case 1988:
case 3664:
case 503:
case 3514:
case 2753:
case 686:
case 3737:
case 870:
case 2252:
case 3691:
case 1536:
case 3540:
case 1905:
case 980:
case 1346:
case 1045:
case 3538:
case 2562:
case 74:
case 3724:
case 607:
case 3697:
case 4042:
case 1582:
case 3731:
case 3699:
case 455:
case 2639:
case 4020:
case 2637:
case 3522:
case 2598:
case 3911:
case 377:
case 2451:
case 2376:
case 66:
case 2631:
case 998:
case 1885:
case 20:
case 2799:
case 3928:
case 3433:
case 3213:
case 3919:
case 2457:
case 3806:
case 349:
case 3044:
case 3673:
case 1837:
case 2608:
case 54:
case 457:
case 3904:
case 2471:
case 1725:
case 375:
case 2055:
case 1824:
case 748:
case 2685:
case 703:
case 1180:
case 892:
case 3010:
case 3280:
case 3030:
case 3908:
case 1323:
case 2277:
case 3826:
case 88:
case 2271:
case 637:
case 3502:
case 1906:
case 1817:
case 329:
case 1345:
case 1819:
case 52:
case 3732:
case 2257:
case 2768:
case 3413:
case 3939:
case 1804:
case 2953:
case 446:
case 3937:
case 890:
case 2611:
case 1133:
case 2594:
case 3931:
case 3692:
case 3786:
case 635:
case 1589:
case 4049:
case 2628:
case 1587:
case 2251:
case 238:
case 1705:
case 136:
case 2567:
case 3334:
case 2642:
case 3321:
case 486:
case 3206:
case 753:
case 4012:
case 2265:
case 1404:
case 2555:
case 1208:
case 3329:
case 3720:
case 734:
case 2173:
case 407:
case 3544:
case 3:
case 3426:
case 1411:
case 1842:
case 468:
case 3880:
case 224:
case 25:
case 1239:
case 770:
case 2098:
case 2575:
case 3022:
case 831:
case 1428:
case 3137:
case 405:
case 833:
case 1228:
case 1651:
case 3700:
case 58:
case 1087:
case 1913:
case 918:
case 1217:
case 1437:
case 3111:
case 2877:
case 244:
case 1657:
case 2879:
case 3226:
case 854:
case 788:
case 1546:
case 3942:
case 4086:
case 2851:
case 590:
case 3338:
case 504:
case 3002:
case 812:
case 1980:
case 1382:
case 3406:
case 3741:
case 766:
case 1679:
case 2859:
case 2857:
case 1035:
case 3104:
case 1485:
case 1336:
case 2683:
case 3031:
case 1663:
case 93:
case 677:
case 3675:
case 282:
case 923:
case 941:
case 3122:
case 2198:
case 3487:
case 3039:
case 2270:
case 573:
case 3489:
case 1222:
case 1844:
case 2053:
case 415:
case 1723:
case 1006:
case 2560:
case 550:
case 1305:
case 3435:
case 1580:
case 4038:
case 278:
case 1388:
case 3655:
case 2368:
case 417:
case 3332:
case 3008:
case 2073:
case 3312:
case 280:
case 2450:
case 2790:
case 2399:
case 1202:
case 802:
case 159:
case 3235:
case 4018:
case 2955:
case 1384:
case 4027:
case 2364:
case 3004:
case 629:
case 3846:
case 2169:
case 3017:
case 1422:
case 160:
case 3983:
case 908:
case 1189:
case 2975:
case 1026:
case 3011:
case 2194:
case 1325:
case 1848:
case 1181:
case 2496:
case 983:
case 222:
case 869:
case 1822:
case 1650:
case 1430:
case 1210:
case 1080:
case 713:
case 873:
case 3110:
case 500:
case 594:
case 3300:
case 3709:
case 2060:
case 3902:
case 3537:
case 3539:
case 1981:
case 1670:
case 3698:
case 1987:
case 3524:
case 1013:
case 1283:
case 1782:
case 1696:
case 3349:
case 732:
case 3740:
case 3738:
case 2263:
case 2463:
case 3835:
case 3718:
case 502:
case 3320:
case 3661:
case 3729:
case 1526:
case 1483:
case 3517:
case 3667:
case 1716:
case 3721:
case 3519:
case 3504:
case 871:
case 497:
case 3881:
case 3148:
case 1230:
case 730:
case 109:
case 852:
case 3887:
case 981:
case 1915:
case 1146:
case 2602:
case 1827:
case 2176:
case 2474:
case 3909:
case 1834:
case 3203:
case 574:
case 3702:
case 3047:
case 3907:
case 893:
case 702:
case 1821:
case 3049:
case 1103:
case 95:
case 2190:
case 2629:
case 1588:
case 2761:
case 2156:
case 2627:
case 4030:
case 2618:
case 1936:
case 3914:
case 3938:
case 3000:
case 2769:
case 2360:
case 2767:
case 3940:
case 2258:
case 530:
case 1505:
case 1789:
case 2895:
case 429:
case 3929:
case 700:
case 1801:
case 1123:
case 2591:
case 513:
case 2564:
case 2614:
case 2638:
case 1807:
case 3662:
case 2254:
case 3934:
case 2640:
case 4010:
case 2597:
case 944:
case 477:
case 891:
case 3836:
case 1840:
case 2607:
case 2274:
case 218:
case 4083:
case 615:
case 1221:
case 3385:
case 4002:
case 697:
case 1414:
case 2878:
case 3803:
case 1005:
case 1945:
case 593:
case 3482:
case 1229:
case 874:
case 2068:
case 3308:
case 1218:
case 3129:
case 1678:
case 3324:
case 3331:
case 695:
case 3549:
case 489:
case 1746:
case 2295:
case 3547:
case 2353:
case 3339:
case 3676:
case 773:
case 2854:
case 3109:
case 3845:
case 3319:
case 3107:
case 3744:
case 2976:
case 2755:
case 3520:
case 3311:
case 1654:
case 1418:
case 832:
case 2099:
case 3783:
case 2162:
case 591:
case 3138:
case 386:
case 1427:
case 3140:
case 2064:
case 3114:
case 750:
case 3236:
case 1214:
case 1434:
case 2775:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753160401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,];
var gg_b = "1753160401/";

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
