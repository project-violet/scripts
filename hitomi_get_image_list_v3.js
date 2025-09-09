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
case 2092:
case 2639:
case 784:
case 1591:
case 3139:
case 2943:
case 2868:
case 3028:
case 2141:
case 3117:
case 1140:
case 2035:
case 1455:
case 1129:
case 2090:
case 1360:
case 1538:
case 1091:
case 2307:
case 1624:
case 3528:
case 262:
case 3557:
case 2535:
case 2937:
case 1580:
case 3278:
case 1082:
case 2573:
case 3846:
case 1582:
case 3914:
case 2210:
case 2188:
case 3566:
case 4086:
case 258:
case 2255:
case 1185:
case 1975:
case 208:
case 991:
case 2826:
case 121:
case 1947:
case 2214:
case 3475:
case 159:
case 2594:
case 3632:
case 1412:
case 3099:
case 93:
case 2548:
case 3695:
case 3386:
case 2094:
case 842:
case 2130:
case 109:
case 2411:
case 3447:
case 236:
case 1045:
case 1410:
case 1933:
case 1649:
case 706:
case 3121:
case 2048:
case 1187:
case 3999:
case 3523:
case 1533:
case 3235:
case 2257:
case 3290:
case 2994:
case 3767:
case 199:
case 3701:
case 1945:
case 796:
case 2948:
case 2863:
case 929:
case 1033:
case 1466:
case 1679:
case 853:
case 2197:
case 180:
case 3697:
case 3477:
case 1075:
case 3012:
case 1499:
case 803:
case 1984:
case 3281:
case 3809:
case 3966:
case 915:
case 367:
case 1174:
case 1047:
case 3273:
case 3445:
case 349:
case 1651:
case 3512:
case 1801:
case 531:
case 1867:
case 2800:
case 3438:
case 3756:
case 3659:
case 3514:
case 1618:
case 2425:
case 3671:
case 1308:
case 1980:
case 2802:
case 2981:
case 1170:
case 328:
case 2537:
case 1253:
case 2183:
case 2519:
case 2654:
case 3014:
case 2973:
case 2305:
case 1938:
case 1606:
case 1709:
case 2935:
case 3482:
case 3928:
case 2543:
case 1991:
case 370:
case 2990:
case 679:
case 825:
case 1316:
case 3248:
case 3480:
case 1193:
case 3098:
case 28:
case 2677:
case 3177:
case 3531:
case 1199:
case 3206:
case 269:
case 3450:
case 2645:
case 3598:
case 3860:
case 2049:
case 1703:
case 945:
case 3689:
case 2189:
case 2272:
case 1346:
case 1487:
case 3085:
case 1952:
case 1259:
case 3218:
case 870:
case 2684:
case 3184:
case 3653:
case 2153:
case 4065:
case 325:
case 489:
case 1760:
case 2761:
case 1915:
case 3803:
case 2918:
case 588:
case 3970:
case 3180:
case 1493:
case 2274:
case 918:
case 1954:
case 295:
case 353:
case 2906:
case 2869:
case 904:
case 2459:
case 2524:
case 1017:
case 152:
case 71:
case 1157:
case 490:
case 3454:
case 954:
case 1539:
case 867:
case 1886:
case 849:
case 2471:
case 1470:
case 3042:
case 1708:
case 1232:
case 2298:
case 2006:
case 994:
case 450:
case 3222:
case 3929:
case 3940:
case 2705:
case 1917:
case 2244:
case 124:
case 3593:
case 1295:
case 2231:
case 922:
case 2506:
case 3220:
case 3942:
case 3249:
case 3093:
case 9:
case 2924:
case 1015:
case 1440:
case 3570:
case 1619:
case 1716:
case 255:
case 1554:
case 3658:
case 2158:
case 2127:
case 864:
case 683:
case 2018:
case 3627:
case 3439:
case 342:
case 1515:
case 1309:
case 1442:
case 3572:
case 1054:
case 2434:
case 205:
case 211:
case 2518:
case 1114:
case 2495:
case 2675:
case 1550:
case 3985:
case 2579:
case 3808:
case 3421:
case 2913:
case 781:
case 1050:
case 2430:
case 1110:
case 2051:
case 3087:
case 3998:
case 3944:
case 2240:
case 2488:
case 2922:
case 4001:
case 4067:
case 3587:
case 1376:
case 672:
case 1234:
case 3224:
case 2242:
case 3816:
case 2920:
case 2633:
case 650:
case 3622:
case 1695:
case 2478:
case 2644:
case 3144:
case 2698:
case 3198:
case 1243:
case 2369:
case 1099:
case 4003:
case 2149:
case 941:
case 3620:
case 843:
case 600:
case 1121:
case 556:
case 309:
case 1630:
case 3045:
case 3364:
case 962:
case 3131:
case 2631:
case 3258:
case 3185:
case 2685:
case 3227:
case 824:
case 439:
case 2553:
case 1237:
case 1688:
case 3584:
case 1910:
case 3947:
case 1765:
case 3423:
case 2911:
case 3613:
case 2589:
case 774:
case 3084:
case 1066:
case 2053:
case 2443:
case 958:
case 1846:
case 2958:
case 1278:
case 3082:
case 3580:
case 291:
case 1914:
case 908:
case 3582:
case 3865:
case 1117:
case 70:
case 2726:
case 3129:
case 3140:
case 2437:
case 3455:
case 2640:
case 1057:
case 914:
case 3038:
case 112:
case 75:
case 2124:
case 1557:
case 2233:
case 472:
case 3142:
case 313:
case 263:
case 3091:
case 584:
case 3414:
case 1928:
case 79:
case 4008:
case 3709:
case 3316:
case 2481:
case 3193:
case 1248:
case 3991:
case 2704:
case 410:
case 868:
case 575:
case 1876:
case 2058:
case 1438:
case 2027:
case 1514:
case 587:
case 251:
case 760:
case 1115:
case 3801:
case 3289:
case 3428:
case 1055:
case 2435:
case 3457:
case 2490:
case 1014:
case 3980:
case 1671:
case 3170:
case 2670:
case 2284:
case 1152:
case 3075:
case 3547:
case 1477:
case 3499:
case 1510:
case 689:
case 1012:
case 2179:
case 3776:
case 1697:
case 2989:
case 3047:
case 1150:
case 1512:
case 3651:
case 1010:
case 3984:
case 42:
case 167:
case 596:
case 1235:
case 3533:
case 2238:
case 1292:
case 2687:
case 3187:
case 3977:
case 3225:
case 3856:
case 248:
case 2700:
case 399:
case 1701:
case 1023:
case 3945:
case 2291:
case 3017:
case 1415:
case 3128:
case 2041:
case 2135:
case 3635:
case 1542:
case 98:
case 3472:
case 153:
case 3039:
case 2418:
case 1625:
case 2541:
case 3517:
case 51:
case 1529:
case 1540:
case 969:
case 3690:
case 947:
case 245:
case 2190:
case 1454:
case 1864:
case 2252:
case 2959:
case 1803:
case 976:
case 432:
case 3760:
case 1972:
case 3297:
case 1182:
case 3673:
case 2983:
case 788:
case 1251:
case 3762:
case 1970:
case 2971:
case 626:
case 1218:
case 3259:
case 3952:
case 1689:
case 1786:
case 2088:
case 2254:
case 995:
case 1974:
case 368:
case 3166:
case 2769:
case 2588:
case 1184:
case 2666:
case 3521:
case 204:
case 2530:
case 1177:
case 1098:
case 2368:
case 1987:
case 1862:
case 1206:
case 2796:
case 3199:
case 2699:
case 578:
case 865:
case 254:
case 2595:
case 2148:
case 1544:
case 3648:
case 1145:
case 119:
case 1031:
case 2451:
case 479:
case 3241:
case 1944:
case 294:
case 1087:
case 1998:
case 2413:
case 673:
case 1133:
case 1587:
case 2623:
case 2930:
case 3052:
case 3678:
case 1574:
case 3444:
case 1301:
case 2097:
case 3552:
case 2805:
case 737:
case 3431:
case 813:
case 2449:
case 2597:
case 1658:
case 3554:
case 2583:
case 944:
case 3716:
case 1439:
case 2059:
case 859:
case 2304:
case 130:
case 1417:
case 3440:
case 3155:
case 2137:
case 3429:
case 343:
case 3114:
case 2559:
case 161:
case 2424:
case 3515:
case 2071:
case 809:
case 3442:
case 3309:
case 1929:
case 324:
case 3295:
case 1593:
case 3917:
case 3232:
case 2143:
case 4009:
case 1220:
case 392:
case 923:
case 2934:
case 2870:
case 3996:
case 1102:
case 3311:
case 346:
case 2486:
case 2167:
case 3667:
case 549:
case 1100:
case 1469:
case 3818:
case 2903:
case 1859:
case 2375:
case 3797:
case 196:
case 1676:
case 1779:
case 2333:
case 926:
case 799:
case 695:
case 377:
case 22:
case 3969:
case 4011:
case 1751:
case 2750:
case 2960:
case 3264:
case 1286:
case 1718:
case 3759:
case 4058:
case 2016:
case 4027:
case 451:
case 676:
case 39:
case 570:
case 415:
case 2754:
case 2516:
case 175:
case 765:
case 1706:
case 2874:
case 187:
case 331:
case 3407:
case 1005:
case 3461:
case 3851:
case 647:
case 429:
case 210:
case 2508:
case 3327:
case 834:
case 3203:
case 528:
case 3358:
case 3813:
case 2739:
case 43:
case 1381:
case 1126:
case 3741:
case 2717:
case 3734:
case 1888:
case 2885:
case 272:
case 1724:
case 1830:
case 3405:
case 837:
case 982:
case 2916:
case 713:
case 3849:
case 2898:
case 3325:
case 1561:
case 1507:
case 2560:
case 2338:
case 491:
case 1335:
case 3822:
case 3788:
case 4089:
case 239:
case 1394:
case 1348:
case 3216:
case 611:
case 1168:
case 156:
case 2377:
case 3665:
case 2840:
case 138:
case 721:
case 3208:
case 374:
case 3795:
case 2503:
case 1722:
case 3596:
case 2721:
case 871:
case 1646:
case 1749:
case 3371:
case 3504:
case 1608:
case 530:
case 1811:
case 2605:
case 135:
case 2354:
case 3004:
case 3878:
case 2315:
case 561:
case 1318:
case 542:
case 2812:
case 636:
case 3246:
case 1737:
case 1426:
case 2823:
case 658:
case 3436:
case 3727:
case 3063:
case 1616:
case 4071:
case 1306:
case 4083:
case 371:
case 1778:
case 3968:
case 3843:
case 407:
case 2576:
case 337:
case 3500:
case 1351:
case 494:
case 662:
case 3000:
case 1379:
case 2855:
case 3837:
case 2733:
case 641:
case 900:
case 2946:
case 3819:
case 1827:
case 2352:
case 3902:
case 3209:
case 2777:
case 3873:
case 3388:
case 4030:
case 525:
case 1794:
case 120:
case 2745:
case 2204:
case 1603:
case 454:
case 990:
case 3890:
case 3686:
case 4088:
case 2186:
case 3789:
case 1664:
case 3568:
case 3330:
case 316:
case 831:
case 1402:
case 1349:
case 3753:
case 1169:
case 2784:
case 3332:
case 3068:
case 860:
case 334:
case 519:
case 3395:
case 2857:
case 3835:
case 1400:
case 96:
case 702:
case 3894:
case 2607:
case 2661:
case 3107:
case 3334:
case 553:
case 2339:
case 11:
case 752:
case 1781:
case 47:
case 503:
case 617:
case 1404:
case 2317:
case 3725:
case 388:
case 2738:
case 1792:
case 1853:
case 2866:
case 1735:
case 445:
case 1267:
case 1889:
case 2791:
case 1536:
case 1790:
case 486:
case 2200:
case 131:
case 3005:
case 1407:
case 387:
case 1203:
case 3505:
case 2852:
case 2462:
case 1358:
case 2355:
case 3337:
case 654:
case 3104:
case 160:
case 1759:
case 770:
case 1656:
case 2663:
case 3718:
case 4037:
case 3961:
case 1264:
case 618:
case 375:
case 2770:
case 1771:
case 820:
case 3343:
case 3496:
case 2207:
case 2261:
case 2323:
case 3751:
case 67:
case 599:
case 498:
case 417:
case 1969:
case 1262:
case 2310:
case 3883:
case 185:
case 2854:
case 580:
case 146:
case 3871:
case 749:
case 3102:
case 2787:
case 2602:
case 1996:
case 2312:
case 686:
case 3469:
case 910:
case 3859:
case 3378:
case 81:
case 1601:
case 2205:
case 2744:
case 1795:
case 3722:
case 414:
case 338:
case 1208:
case 2798:
case 3720:
case 3646:
case 4048:
case 3749:
case 4094:
case 2731:
case 972:
case 436:
case 521:
case 1389:
case 1569:
case 2086:
case 509:
case 1665:
case 408:
case 2839:
case 356:
case 2668:
case 3168:
case 2586:
case 657:
case 2408:
case 881:
case 15:
case 712:
case 3007:
case 2357:
case 4073:
case 1822:
case 2328:
case 3895:
case 3507:
case 3392:
case 2740:
case 2729:
case 4035:
case 1136:
case 6:
case 622:
case 63:
case 381:
case 2236:
case 137:
case 2567:
case 1500:
case 3858:
case 3827:
case 3468:
case 2067:
case 2723:
case 1502:
case 3379:
case 1837:
case 1000:
case 4079:
case 2710:
case 2965:
case 4051:
case 1843:
case 2446:
case 455:
case 1063:
case 2393:
case 2056:
case 2116:
case 3719:
case 793:
case 3426:
case 838:
case 2714:
case 405:
case 1563:
case 411:
case 2847:
case 742:
case 1926:
case 1383:
case 335:
case 2370:
case 2108:
case 4006:
case 1504:
case 3608:
case 806:
case 250:
case 1371:
case 3318:
case 1359:
case 2875:
case 730:
case 1246:
case 2372:
case 543:
case 1878:
case 1004:
case 1026:
case 1725:
case 896:
case 3036:
case 3792:
case 3853:
case 979:
case 4024:
case 1526:
case 527:
case 648:
case 3536:
case 3889:
case 703:
case 1848:
case 1963:
case 3324:
case 2845:
case 289:
case 1107:
case 1161:
case 1894:
case 552:
case 1276:
case 1334:
case 2160:
case 2340:
case 753:
case 3773:
case 495:
case 3404:
case 31:
case 2877:
case 3662:
case 3781:
case 2162:
case 3256:
case 2565:
case 3402:
case 651:
case 2331:
case 1330:
case 116:
case 1686:
case 1789:
case 1568:
case 134:
case 1835:
case 2766:
case 4013:
case 3169:
case 378:
case 2838:
case 1332:
case 3825:
case 1873:
case 4022:
case 3196:
case 2799:
case 1209:
case 725:
case 2880:
case 3313:
case 2103:
case 3748:
case 3603:
case 4020:
case 629:
case 875:
case 447:
case 2882:
case 2967:
case 2901:
case 320:
case 1733:
case 1946:
case 507:
case 1352:
case 2827:
case 613:
case 3001:
case 1226:
case 1814:
case 1350:
case 557:
case 281:
case 4087:
case 3374:
case 3710:
case 5:
case 1747:
case 522:
case 971:
case 4074:
case 2778:
case 2265:
case 2306:
case 621:
case 1268:
case 4070:
case 3056:
case 3393:
case 3833:
case 3116:
case 2616:
case 1823:
case 4072:
case 2318:
case 609:
case 4093:
case 755:
case 300:
case 235:
case 937:
case 705:
case 3370:
case 2936:
case 699:
case 57:
case 403:
case 2267:
case 2536:
case 3757:
case 4040:
case 4029:
case 453:
case 2792:
case 1738:
case 3884:
case 1202:
case 1866:
case 3340:
case 2404:
case 2773:
case 586:
case 1780:
case 3162:
case 2781:
case 2662:
case 934:
case 1899:
case 3342:
case 916:
case 3956:
case 132:
case 1782:
case 1661:
case 3160:
case 333:
case 1467:
case 425:
case 3838:
case 1784:
case 3669:
case 3766:
case 2169:
case 554:
case 3398:
case 1263:
case 2402:
case 166:
case 776:
case 597:
case 2603:
case 2748:
case 518:
case 3385:
case 419:
case 220:
case 4031:
case 1204:
case 179:
case 3882:
case 988:
case 3476:
case 4044:
case 1546:
case 3696:
case 2196:
case 3799:
case 3880:
case 3793:
case 3852:
case 2337:
case 501:
case 110:
case 2897:
case 3604:
case 2005:
case 3314:
case 3460:
case 1296:
case 1874:
case 985:
case 287:
case 668:
case 529:
case 1754:
case 4014:
case 275:
case 3770:
case 1962:
case 2343:
case 2163:
case 2718:
case 3663:
case 1016:
case 2961:
case 2907:
case 4055:
case 326:
case 449:
case 3774:
case 890:
case 12:
case 467:
case 3323:
case 296:
case 1964:
case 2779:
case 3176:
case 2676:
case 1903:
case 86:
case 1101:
case 1167:
case 1872:
case 602:
case 2883:
case 717:
case 1486:
case 889:
case 2871:
case 652:
case 2102:
case 3146:
case 2720:
case 0:
case 1503:
case 708:
case 2722:
case 238:
case 3798:
case 3817:
case 1165:
case 2841:
case 1840:
case 3399:
case 3586:
case 800:
case 1377:
case 3839:
case 2348:
case 3785:
case 1842:
case 139:
case 206:
case 1064:
case 850:
case 2394:
case 3357:
case 2335:
case 3328:
case 2895:
case 1844:
case 2832:
case 2561:
case 1560:
case 2392:
case 1338:
case 53:
case 1391:
case 2061:
case 2007:
case 762:
case 2390:
case 1060:
case 3742:
case 172:
case 591:
case 373:
case 4028:
case 3740:
case 2905:
case 1717:
case 4057:
case 1908:
case 1739:
case 1636:
case 974:
case 2381:
case 3509:
case 505:
case 511:
case 3315:
case 2878:
case 1875:
case 492:
case 664:
case 1108:
case 150:
case 2371:
case 3605:
case 2383:
case 3810:
case 3268:
case 1556:
case 4054:
case 2563:
case 1714:
case 4015:
case 1393:
case 2063:
case 1056:
case 1116:
case 794:
case 3576:
case 1446:
case 2711:
case 1965:
case 872:
case 722:
case 3076:
case 1712:
case 7:
case 3775:
case 3465:
case 1723:
case 1001:
case 1067:
case 2397:
case 2502:
case 612:
case 3855:
case 2837:
case 3733:
case 3352:
case 2500:
case 2002:
case 3226:
case 3350:
case 3814:
case 1901:
case 3204:
case 1967:
case 3745:
case 1103:
case 3046:
case 1385:
case 1696:
case 2902:
case 2881:
case 1880:
case 3777:
case 718:
case 3546:
case 1476:
case 1669:
case 1766:
case 2753:
case 2892:
case 2068:
case 2332:
case 704:
case 547:
case 3828:
case 569:
case 234:
case 1344:
case 628:
case 91:
case 2835:
case 1331:
case 3976:
case 1891:
case 754:
case 366:
case 2568:
case 2789:
case 2686:
case 3263:
case 16:
case 427:
case 1329:
case 1340:
case 2341:
case 978:
case 2161:
case 2107:
case 189:
case 3607:
case 3782:
case 3661:
case 2276:
case 133:
case 1409:
case 745:
case 2963:
case 2848:
case 190:
case 3200:
case 595:
case 402:
case 2526:
case 3456:
case 3866:
case 3738:
case 2026:
case 4017:
case 1728:
case 2601:
case 2667:
case 1600:
case 499:
case 94:
case 598:
case 1312:
case 4033:
case 3903:
case 603:
case 840:
case 2996:
case 987:
case 1310:
case 1854:
case 32:
case 1774:
case 1403:
case 2969:
case 1261:
case 3964:
case 1207:
case 2797:
case 480:
case 2260:
case 3333:
case 4075:
case 3269:
case 2771:
case 29:
case 879:
case 465:
case 3516:
case 2783:
case 3960:
case 1772:
case 2264:
case 2656:
case 3156:
case 729:
case 1663:
case 996:
case 1355:
case 1604:
case 751:
case 2358:
case 619:
case 3296:
case 715:
case 2461:
case 231:
case 2851:
case 1460:
case 413:
case 3382:
case 173:
case 2734:
case 4091:
case 1742:
case 2136:
case 4038:
case 3636:
case 3908:
case 1740:
case 1626:
case 938:
case 3717:
case 20:
case 3062:
case 1357:
case 956:
case 541:
case 25:
case 3391:
case 2405:
case 3831:
case 3562:
case 4082:
case 2820:
case 2849:
case 763:
case 906:
case 1399:
case 1839:
case 4084:
case 1668:
case 3564:
case 536:
case 1817:
case 2665:
case 421:
case 3829:
case 383:
case 1086:
case 339:
case 630:
case 2596:
case 409:
case 2389:
case 2730:
case 3721:
case 693:
case 508:
case 4077:
case 1366:
case 2208:
case 1798:
case 1744:
case 1205:
case 2517:
case 1471:
case 2470:
case 2690:
case 1483:
case 386:
case 2539:
case 2886:
case 3041:
case 2017:
case 4026:
case 1524:
case 252:
case 2635:
case 3657:
case 3135:
case 1638:
case 3418:
case 488:
case 740:
case 1459:
case 590:
case 3250:
case 3173:
case 2954:
case 3326:
case 3983:
case 195:
case 1896:
case 2762:
case 3181:
case 37:
case 1680:
case 1274:
case 3971:
case 3252:
case 3959:
case 3406:
case 696:
case 1707:
case 1761:
case 2915:
case 1682:
case 2297:
case 2283:
case 1013:
case 675:
case 4068:
case 3666:
case 3769:
case 2346:
case 2259:
case 779:
case 1189:
case 1513:
case 2764:
case 416:
case 1979:
case 815:
case 2648:
case 2021:
case 801:
case 354:
case 903:
case 3861:
case 3807:
case 2694:
case 3532:
case 3194:
case 64:
case 3479:
case 304:
case 1497:
case 851:
case 2521:
case 3368:
case 18:
case 1677:
case 3530:
case 3796:
case 3413:
case 891:
case 322:
case 2376:
case 3930:
case 4000:
case 394:
case 3217:
case 2241:
case 1240:
case 1488:
case 1229:
case 437:
case 2485:
case 4002:
case 3805:
case 1647:
case 2050:
case 2431:
case 1051:
case 3449:
case 3420:
case 863:
case 684:
case 3597:
case 1432:
case 2052:
case 1551:
case 930:
case 3612:
case 2112:
case 3422:
case 3300:
case 1079:
case 1495:
case 83:
case 2678:
case 2444:
case 3178:
case 1434:
case 2054:
case 656:
case 105:
case 500:
case 3559:
case 2114:
case 3071:
case 2309:
case 2442:
case 155:
case 1158:
case 606:
case 1127:
case 550:
case 3571:
case 3304:
case 3137:
case 2440:
case 292:
case 1924:
case 3221:
case 2230:
case 3934:
case 1231:
case 4004:
case 1244:
case 2917:
case 638:
case 1705:
case 2295:
case 224:
case 2643:
case 3143:
case 2232:
case 1006:
case 3120:
case 2620:
case 3149:
case 2746:
case 2649:
case 1048:
case 1621:
case 1094:
case 2364:
case 2045:
case 136:
case 1411:
case 209:
case 1130:
case 3631:
case 2410:
case 2131:
case 912:
case 3122:
case 2144:
case 114:
case 259:
case 2545:
case 3698:
case 1594:
case 1826:
case 221:
case 3911:
case 2947:
case 3589:
case 3768:
case 4069:
case 3053:
case 2084:
case 2258:
case 2227:
case 1978:
case 3089:
case 2584:
case 3553:
case 1255:
case 3247:
case 1073:
case 822:
case 2211:
case 391:
case 1081:
case 40:
case 3927:
case 3443:
case 3958:
case 1919:
case 1212:
case 45:
case 1581:
case 3124:
case 162:
case 3642:
case 3233:
case 1090:
case 2538:
case 2414:
case 3525:
case 141:
case 2091:
case 2865:
case 1617:
case 3437:
case 2455:
case 1035:
case 3640:
case 3419:
case 1590:
case 964:
case 2591:
case 1868:
case 857:
case 1427:
case 3025:
case 620:
case 3693:
case 3704:
case 329:
case 897:
case 3245:
case 2991:
case 1990:
case 1935:
case 3277:
case 1043:
case 3106:
case 2606:
case 315:
case 3490:
case 1183:
case 1654:
case 1305:
case 2980:
case 2308:
case 2253:
case 49:
case 1537:
case 3670:
case 949:
case 1019:
case 1159:
case 710:
case 3027:
case 1425:
case 2618:
case 3763:
case 3118:
case 2982:
case 1615:
case 2867:
case 3435:
case 2172:
case 3494:
case 928:
case 2047:
case 2575:
case 1650:
case 61:
case 3151:
case 845:
case 3953:
case 2984:
case 117:
case 3674:
case 886:
case 2075:
case 2547:
case 3179:
case 2679:
case 1804:
case 3989:
case 280:
case 2856:
case 1863:
case 2033:
case 1994:
case 3291:
case 1228:
case 1489:
case 485:
case 446:
case 1257:
case 1194:
case 1532:
case 2450:
case 1807:
case 2145:
case 369:
case 420:
case 2031:
case 902:
case 3020:
case 3522:
case 3293:
case 1595:
case 154:
case 2544:
case 2177:
case 1530:
case 2452:
case 1032:
case 2098:
case 2206:
case 2987:
case 952:
case 1699:
case 1479:
case 2044:
case 104:
case 2365:
case 566:
case 197:
case 478:
case 118:
case 2184:
case 1588:
case 3684:
case 1254:
case 225:
case 2786:
case 3189:
case 2689:
case 376:
case 1088:
case 2218:
case 2970:
case 3896:
case 41:
case 1971:
case 3274:
case 3336:
case 3680:
case 968:
case 1983:
case 395:
case 2972:
case 2279:
case 3682:
case 2182:
case 1959:
case 790:
case 1252:
case 2803:
case 1190:
case 3483:
case 1034:
case 2864:
case 2191:
case 186:
case 789:
case 3024:
case 3471:
case 2993:
case 2529:
case 1534:
case 4036:
case 646:
case 253:
case 3869:
case 1041:
case 2040:
case 1657:
case 1135:
case 2029:
case 2542:
case 293:
case 808:
case 3231:
case 1934:
case 2249:
case 2220:
case 2093:
case 3298:
case 674:
case 858:
case 3006:
case 2940:
case 2222:
case 3244:
case 3705:
case 1424:
case 242:
case 1083:
case 305:
case 3434:
case 3518:
case 1559:
case 3441:
case 1571:
case 230:
case 2072:
case 3158:
case 2658:
case 1119:
case 355:
case 3285:
case 2439:
case 3018:
case 2627:
case 3127:
case 1420:
case 1302:
case 3579:
case 107:
case 943:
case 2421:
case 2074:
case 2808:
case 862:
case 2147:
case 3430:
case 1610:
case 60:
case 3051:
case 1988:
case 2574:
case 1097:
case 2367:
case 344:
case 157:
case 2301:
case 3675:
case 2175:
case 2985:
case 1930:
case 2224:
case 1413:
case 2133:
case 3920:
case 2816:
case 3949:
case 924:
case 2087:
case 2944:
case 1995:
case 3922:
case 3488:
case 481:
case 3240:
case 3134:
case 3592:
case 2634:
case 3307:
case 341:
case 3223:
case 1525:
case 362:
case 1124:
case 909:
case 1233:
case 3535:
case 3590:
case 3458:
case 3092:
case 3943:
case 844:
case 3736:
case 3639:
case 2641:
case 3617:
case 1629:
case 1726:
case 1437:
case 823:
case 921:
case 191:
case 1247:
case 484:
case 3210:
case 4007:
case 3581:
case 2278:
case 3573:
case 773:
case 3919:
case 1958:
case 1836:
case 308:
case 671:
case 1053:
case 2433:
case 3826:
case 2910:
case 3214:
case 2765:
case 3978:
case 3255:
case 406:
case 1553:
case 2566:
case 2219:
case 3130:
case 2923:
case 3094:
case 1631:
case 2599:
case 1120:
case 2121:
case 811:
case 913:
case 2632:
case 3132:
case 1698:
case 438:
case 2243:
case 2099:
case 1369:
case 1122:
case 583:
case 3195:
case 1644:
case 2290:
case 1700:
case 2767:
case 2701:
case 1291:
case 3994:
case 3948:
case 1687:
case 2523:
case 688:
case 3489:
case 3228:
case 2235:
case 3257:
case 2809:
case 2281:
case 398:
case 1953:
case 1448:
case 267:
case 965:
case 1280:
case 317:
case 1011:
case 2150:
case 2273:
case 1494:
case 2512:
case 1179:
case 3804:
case 2152:
case 3652:
case 2510:
case 869:
case 3171:
case 3537:
case 2555:
case 1670:
case 228:
case 3981:
case 1284:
case 3802:
case 634:
case 3654:
case 2154:
case 2683:
case 3519:
case 1490:
case 3183:
case 847:
case 2014:
case 88:
case 3800:
case 2055:
case 1492:
case 3425:
case 1763:
case 1118:
case 3159:
case 270:
case 129:
case 1245:
case 1473:
case 999:
case 1481:
case 2480:
case 3043:
case 1277:
case 1925:
case 3299:
case 3992:
case 2482:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757422801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,];
var gg_b = "1757422801/";

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
