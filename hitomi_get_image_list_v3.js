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
case 1657:
case 2137:
case 3747:
case 2496:
case 950:
case 630:
case 226:
case 2873:
case 270:
case 266:
case 1580:
case 756:
case 3046:
case 1353:
case 1238:
case 1133:
case 2338:
case 2253:
case 77:
case 2917:
case 3902:
case 107:
case 2806:
case 3579:
case 3674:
case 1900:
case 1399:
case 2420:
case 1052:
case 1182:
case 1913:
case 3533:
case 3785:
case 3050:
case 998:
case 618:
case 2518:
case 1549:
case 3091:
case 3953:
case 3754:
case 2483:
case 3012:
case 2007:
case 2266:
case 2706:
case 1798:
case 2441:
case 3228:
case 2565:
case 1487:
case 2739:
case 3149:
case 1777:
case 3313:
case 844:
case 78:
case 9:
case 420:
case 3300:
case 3999:
case 280:
case 2974:
case 577:
case 3617:
case 2762:
case 2602:
case 1224:
case 609:
case 2779:
case 616:
case 2472:
case 3794:
case 110:
case 3993:
case 1386:
case 3818:
case 2286:
case 398:
case 2421:
case 1036:
case 3648:
case 2905:
case 32:
case 3129:
case 2547:
case 36:
case 1425:
case 3827:
case 2114:
case 1543:
case 3727:
case 3234:
case 1919:
case 2948:
case 1697:
case 2397:
case 1297:
case 3986:
case 2882:
case 2693:
case 4045:
case 529:
case 81:
case 2293:
case 2198:
case 488:
case 1359:
case 2259:
case 904:
case 2440:
case 1011:
case 3506:
case 3160:
case 1173:
case 996:
case 3894:
case 1092:
case 1162:
case 1678:
case 3605:
case 3760:
case 3600:
case 3881:
case 2302:
case 1762:
case 1602:
case 1773:
case 1469:
case 2523:
case 2445:
case 3613:
case 1432:
case 3213:
case 2777:
case 1739:
case 1527:
case 2561:
case 3430:
case 430:
case 3843:
case 87:
case 3829:
case 1706:
case 2798:
case 1266:
case 500:
case 3328:
case 149:
case 1565:
case 4040:
case 1518:
case 941:
case 3127:
case 2549:
case 4063:
case 4072:
case 3558:
case 591:
case 3471:
case 3374:
case 2898:
case 1917:
case 1420:
case 1594:
case 744:
case 1699:
case 418:
case 2900:
case 2580:
case 2638:
case 1158:
case 643:
case 513:
case 1653:
case 2353:
case 2238:
case 676:
case 2257:
case 2408:
case 2179:
case 236:
case 166:
case 1873:
case 126:
case 3598:
case 1879:
case 517:
case 647:
case 2678:
case 2173:
case 19:
case 1554:
case 2139:
case 2359:
case 1177:
case 1440:
case 409:
case 341:
case 2106:
case 539:
case 2393:
case 4032:
case 1693:
case 3723:
case 678:
case 3577:
case 3601:
case 2919:
case 3761:
case 1456:
case 3084:
case 2697:
case 1397:
case 3416:
case 3055:
case 1489:
case 3185:
case 1782:
case 1547:
case 1905:
case 3978:
case 2009:
case 3823:
case 3997:
case 3849:
case 2386:
case 71:
case 2036:
case 1934:
case 4020:
case 1733:
case 2624:
case 1463:
case 2893:
case 589:
case 2476:
case 3495:
case 1069:
case 356:
case 468:
case 1032:
case 4068:
case 1897:
case 288:
case 3553:
case 3030:
case 1923:
case 540:
case 2574:
case 1237:
case 1724:
case 2337:
case 1379:
case 2403:
case 1041:
case 1878:
case 3294:
case 2087:
case 109:
case 3805:
case 1961:
case 3748:
case 1658:
case 563:
case 523:
case 49:
case 1407:
case 3218:
case 3982:
case 3113:
case 2886:
case 2759:
case 3349:
case 3618:
case 3848:
case 3566:
case 1824:
case 3022:
case 3665:
case 3705:
case 990:
case 3265:
case 3933:
case 1513:
case 3734:
case 3227:
case 3627:
case 1488:
case 638:
case 603:
case 278:
case 1096:
case 38:
case 3464:
case 3979:
case 3323:
case 3973:
case 798:
case 2492:
case 3828:
case 2799:
case 607:
case 1844:
case 2548:
case 301:
case 3939:
case 1040:
case 1614:
case 702:
case 2124:
case 3247:
case 636:
case 3031:
case 260:
case 276:
case 220:
case 3817:
case 243:
case 750:
case 1738:
case 3484:
case 1415:
case 2954:
case 1056:
case 2985:
case 1277:
case 2534:
case 2377:
case 1677:
case 1159:
case 470:
case 2853:
case 1089:
case 426:
case 3360:
case 3593:
case 2025:
case 2273:
case 3717:
case 1929:
case 2662:
case 2262:
case 98:
case 1373:
case 7:
case 1943:
case 3654:
case 105:
case 3559:
case 2436:
case 2398:
case 2766:
case 1698:
case 390:
case 2206:
case 3874:
case 2899:
case 3728:
case 3070:
case 1793:
case 1008:
case 2096:
case 2166:
case 3223:
case 3128:
case 1517:
case 551:
case 668:
case 2488:
case 3661:
case 628:
case 2824:
case 3117:
case 3318:
case 1759:
case 3544:
case 3819:
case 2980:
case 3491:
case 4011:
case 1786:
case 344:
case 508:
case 2153:
case 2407:
case 533:
case 1358:
case 515:
case 2961:
case 645:
case 592:
case 2379:
case 1679:
case 1403:
case 2637:
case 1337:
case 2923:
case 1279:
case 2878:
case 1087:
case 91:
case 3394:
case 2041:
case 216:
case 1045:
case 804:
case 2032:
case 3680:
case 3280:
case 1282:
case 403:
case 1965:
case 3557:
case 3174:
case 2199:
case 2069:
case 1206:
case 4052:
case 2298:
case 506:
case 2193:
case 86:
case 2063:
case 649:
case 1398:
case 2306:
case 1766:
case 342:
case 1606:
case 2698:
case 2981:
case 1947:
case 850:
case 1505:
case 407:
case 3134:
case 218:
case 680:
case 2857:
case 3660:
case 2373:
case 186:
case 2362:
case 1702:
case 3105:
case 2929:
case 1377:
case 2677:
case 2159:
case 2501:
case 3914:
case 2838:
case 3813:
case 2186:
case 143:
case 3643:
case 4076:
case 1753:
case 73:
case 3347:
case 3800:
case 2757:
case 3998:
case 3004:
case 120:
case 8:
case 3035:
case 2614:
case 2214:
case 2519:
case 3629:
case 31:
case 3524:
case 3490:
case 2960:
case 2746:
case 3136:
case 1043:
case 3356:
case 195:
case 4017:
case 1434:
case 2401:
case 2231:
case 1604:
case 1764:
case 917:
case 1509:
case 300:
case 112:
case 2047:
case 3970:
case 3807:
case 2085:
case 1536:
case 4028:
case 131:
case 2891:
case 2642:
case 1342:
case 1635:
case 284:
case 1235:
case 1989:
case 840:
case 3478:
case 1405:
case 3109:
case 2925:
case 939:
case 464:
case 352:
case 659:
case 1370:
case 1126:
case 471:
case 2270:
case 3372:
case 954:
case 1448:
case 3267:
case 2419:
case 634:
case 2850:
case 2184:
case 3707:
case 3667:
case 3321:
case 313:
case 2054:
case 1956:
case 715:
case 3111:
case 708:
case 1190:
case 1060:
case 2846:
case 3039:
case 391:
case 2216:
case 1940:
case 792:
case 4005:
case 3444:
case 339:
case 2094:
case 3341:
case 2751:
case 3079:
case 2890:
case 3546:
case 1330:
case 2630:
case 2230:
case 3332:
case 3645:
case 1080:
case 875:
case 719:
case 2588:
case 3245:
case 3922:
case 2826:
case 3369:
case 2400:
case 794:
case 3868:
case 1920:
case 2726:
case 1941:
case 3396:
case 3768:
case 1675:
case 3103:
case 3438:
case 1784:
case 1112:
case 2027:
case 1061:
case 114:
case 3110:
case 1855:
case 885:
case 1191:
case 53:
case 2195:
case 4048:
case 1474:
case 2790:
case 2622:
case 282:
case 2222:
case 913:
case 935:
case 1371:
case 2671:
case 2507:
case 2018:
case 462:
case 354:
case 3591:
case 422:
case 1510:
case 3935:
case 1515:
case 3289:
case 3689:
case 973:
case 2316:
case 1216:
case 2864:
case 723:
case 2795:
case 3325:
case 2190:
case 24:
case 1568:
case 3115:
case 1712:
case 624:
case 664:
case 2448:
case 3221:
case 1419:
case 459:
case 3710:
case 2956:
case 325:
case 174:
case 681:
case 2126:
case 3272:
case 3098:
case 3168:
case 3672:
case 2511:
case 3263:
case 1925:
case 892:
case 929:
case 377:
case 434:
case 3803:
case 969:
case 3240:
case 231:
case 1750:
case 2536:
case 808:
case 3640:
case 1085:
case 2989:
case 1242:
case 2235:
case 1335:
case 1642:
case 833:
case 2635:
case 779:
case 815:
case 3876:
case 2509:
case 2204:
case 2972:
case 2604:
case 2764:
case 3493:
case 4013:
case 504:
case 3256:
case 983:
case 3656:
case 2043:
case 1746:
case 3555:
case 1967:
case 2921:
case 1507:
case 2371:
case 925:
case 1945:
case 1671:
case 2510:
case 2049:
case 987:
case 3499:
case 1065:
case 52:
case 182:
case 1222:
case 2503:
case 2969:
case 2322:
case 1790:
case 2474:
case 3453:
case 2855:
case 373:
case 1027:
case 2061:
case 214:
case 411:
case 1726:
case 3296:
case 2941:
case 1375:
case 3696:
case 3709:
case 3402:
case 2417:
case 4001:
case 2330:
case 2884:
case 1630:
case 383:
case 1588:
case 2755:
case 1413:
case 3632:
case 2080:
case 329:
case 785:
case 3892:
case 3975:
case 3641:
case 3241:
case 977:
case 3811:
case 257:
case 3037:
case 3466:
case 727:
case 5:
case 3736:
case 3188:
case 3683:
case 1556:
case 3140:
case 1255:
case 3477:
case 1142:
case 865:
case 1911:
case 3531:
case 20:
case 1875:
case 887:
case 3808:
case 2460:
case 919:
case 2048:
case 1019:
case 351:
case 3156:
case 1540:
case 3336:
case 2871:
case 752:
case 3542:
case 2915:
case 1131:
case 2968:
case 1351:
case 937:
case 2251:
case 2104:
case 3926:
case 262:
case 3498:
case 132:
case 3570:
case 713:
case 1563:
case 2690:
case 2771:
case 1521:
case 4094:
case 3189:
case 155:
case 1326:
case 791:
case 3163:
case 3268:
case 3172:
case 2481:
case 3668:
case 3951:
case 2525:
case 1684:
case 2830:
case 3615:
case 614:
case 308:
case 2034:
case 3845:
case 333:
case 2250:
case 271:
case 2650:
case 1350:
case 951:
case 1418:
case 873:
case 2742:
case 2870:
case 159:
case 1976:
case 474:
case 3053:
case 2646:
case 1346:
case 717:
case 3530:
case 1910:
case 1427:
case 2461:
case 3688:
case 2816:
case 3912:
case 3183:
case 2907:
case 3288:
case 1264:
case 319:
case 2364:
case 1704:
case 1664:
case 1903:
case 542:
case 3825:
case 2017:
case 829:
case 1804:
case 1295:
case 2395:
case 2831:
case 869:
case 1695:
case 1000:
case 992:
case 1596:
case 1122:
case 1952:
case 1171:
case 915:
case 653:
case 1013:
case 3950:
case 461:
case 421:
case 1494:
case 4085:
case 1520:
case 3522:
case 2175:
case 3196:
case 2612:
case 3571:
case 3607:
case 3767:
case 2988:
case 281:
case 2842:
case 224:
case 1391:
case 3946:
case 3310:
case 2291:
case 134:
case 264:
case 2284:
case 2589:
case 1830:
case 3167:
case 1034:
case 3832:
case 340:
case 2326:
case 1626:
case 3869:
case 1525:
case 3796:
case 2447:
case 975:
case 2521:
case 1771:
case 457:
case 3883:
case 57:
case 3692:
case 682:
case 725:
case 800:
case 1005:
case 3292:
case 2572:
case 556:
case 2390:
case 3125:
case 1290:
case 1429:
case 672:
case 1251:
case 1651:
case 2131:
case 3741:
case 162:
case 4049:
case 3406:
case 122:
case 3024:
case 3236:
case 293:
case 1915:
case 3535:
case 3783:
case 3984:
case 3504:
case 3473:
case 3769:
case 1460:
case 4023:
case 2655:
case 835:
case 3732:
case 499:
case 181:
case 1988:
case 3840:
case 3721:
case 3307:
case 1612:
case 3433:
case 2312:
case 4029:
case 375:
case 3610:
case 1842:
case 2391:
case 2835:
case 3044:
case 124:
case 2520:
case 1770:
case 431:
case 3772:
case 3108:
case 817:
case 989:
case 3603:
case 3479:
case 3482:
case 2171:
case 923:
case 746:
case 2013:
case 1480:
case 1395:
case 4043:
case 2695:
case 839:
case 1017:
case 2596:
case 1508:
case 940:
case 2903:
case 3187:
case 2664:
case 1423:
case 453:
case 2910:
case 2346:
case 3889:
case 1816:
case 854:
case 1587:
case 2465:
case 2541:
case 3863:
case 3872:
case 3740:
case 684:
case 3145:
case 2735:
case 3652:
case 2418:
case 729:
case 558:
case 694:
case 1788:
case 2555:
case 395:
case 2656:
case 1356:
case 1136:
case 2493:
case 3081:
case 619:
case 549:
case 3204:
case 100:
case 3509:
case 2876:
case 3895:
case 3331:
case 3151:
case 3604:
case 3764:
case 3989:
case 2459:
case 732:
case 2014:
case 2640:
case 475:
case 277:
case 152:
case 3029:
case 1551:
case 1109:
case 637:
case 3405:
case 1363:
case 2272:
case 2098:
case 2904:
case 2168:
case 1931:
case 2263:
case 1590:
case 3126:
case 3370:
case 2710:
case 427:
case 225:
case 2486:
case 113:
case 135:
case 265:
case 2115:
case 2221:
case 1225:
case 862:
case 1625:
case 4038:
case 2776:
case 3795:
case 3940:
case 4057:
case 191:
case 2584:
case 2289:
case 2689:
case 2188:
case 2283:
case 528:
case 2683:
case 2058:
case 489:
case 1550:
case 2736:
case 1033:
case 2466:
case 2037:
case 1287:
case 229:
case 3996:
case 2975:
case 1687:
case 269:
case 2387:
case 283:
case 824:
case 995:
case 1152:
case 1645:
case 1332:
case 864:
case 2345:
case 3884:
case 1082:
case 3150:
case 1815:
case 881:
case 440:
case 3920:
case 463:
case 117:
case 2709:
case 1369:
case 1922:
case 3417:
case 2296:
case 1103:
case 1457:
case 3675:
case 1608:
case 3576:
case 3023:
case 3855:
case 797:
case 273:
case 3061:
case 3983:
case 3112:
case 871:
case 2107:
case 3784:
case 615:
case 1438:
case 633:
case 2711:
case 2499:
case 1320:
case 1176:
case 2620:
case 734:
case 3510:
case 1930:
case 1591:
case 4024:
case 154:
case 3049:
case 1512:
case 2836:
case 3216:
case 2888:
case 3616:
case 1689:
case 419:
case 1289:
case 3515:
case 893:
case 3568:
case 1325:
case 2625:
case 2526:
case 2062:
case 235:
case 437:
case 125:
case 3054:
case 1221:
case 2267:
case 675:
case 811:
case 2707:
case 3184:
case 1621:
case 2424:
case 1672:
case 1168:
case 2931:
case 187:
case 1703:
case 3670:
case 667:
case 2109:
case 627:
case 1752:
case 1810:
case 3155:
case 3642:
case 3891:
case 3242:
case 4066:
case 2807:
case 321:
case 722:
case 1240:
case 685:
case 3047:
case 3304:
case 3631:
case 1876:
case 855:
case 2788:
case 2136:
case 2356:
case 2497:
case 70:
case 3018:
case 2930:
case 974:
case 3671:
case 3945:
case 3790:
case 1711:
case 382:
case 3222:
case 3851:
case 1620:
case 3065:
case 1499:
case 173:
case 2110:
case 663:
case 2438:
case 1107:
case 2715:
case 1696:
case 640:
case 510:
case 2457:
case 1296:
case 859:
case 1595:
case 3726:
case 146:
case 217:
case 3400:
case 433:
case 2868:
case 408:
case 2922:
case 2369:
case 1709:
case 1669:
case 2645:
case 2971:
case 1632:
case 1345:
case 3588:
case 2245:
case 3230:
case 1037:
case 372:
case 4059:
case 679:
case 2079:
case 1811:
case 771:
case 169:
case 239:
case 1387:
case 3164:
case 897:
case 3094:
case 1975:
case 1892:
case 3751:
case 921:
case 2444:
case 2383:
case 1683:
case 1188:
case 2033:
case 1736:
case 984:
case 503:
case 874:
case 1477:
case 3255:
case 2439:
case 3556:
case 446:
case 712:
case 2896:
case 2462:
case 1990:
case 3454:
case 2783:
case 2535:
case 2984:
case 578:
case 2636:
case 3540:
case 393:
case 3019:
case 639:
case 2406:
case 2024:
case 1926:
case 731:
case 279:
case 1787:
case 3351:
case 2741:
case 1311:
case 3572:
case 3390:
case 1392:
case 2692:
case 2841:
case 1887:
case 2078:
case 2292:
case 4037:
case 1059:
case 654:
case 1189:
case 469:
case 1414:
case 429:
case 3485:
case 2796:
case 1708:
case 1268:
case 3447:
case 997:
case 3326:
case 3170:
case 115:
case 3001:
case 133:
case 1845:
case 3589:
case 2097:
case 108:
case 74:
case 1615:
case 2315:
case 1121:
case 1132:
case 2652:
case 1352:
case 2252:
case 2740:
case 757:
case 2821:
case 1867:
case 3130:
case 2863:
case 2995:
case 227:
case 932:
case 1169:
case 1288:
case 1912:
case 3427:
case 2388:
case 1688:
case 3910:
case 1053:
case 1991:
case 194:
case 2057:
case 1825:
case 3903:
case 2187:
case 3664:
case 3569:
case 3264:
case 1141:
case 2575:
case 714:
case 2676:
case 3695:
case 1120:
case 397:
case 2276:
case 3804:
case 3013:
case 691:
case 3171:
case 2856:
case 576:
case 2203:
case 2763:
case 2479:
case 2964:
case 55:
case 3520:
case 4014:
case 2210:
case 2610:
case 1310:
case 2044:
case 1458:
case 955:
case 543:
case 1207:
case 2840:
case 1767:
case 1571:
case 2433:
case 3034:
case 2516:
case 2845:
case 1832:
case 417:
case 215:
case 1167:
case 3830:
case 831:
case 1315:
case 2215:
case 673:
case 2172:
case 1796:
case 1368:
case 2951:
case 516:
case 2093:
case 646:
case 3525:
case 3226:
case 1869:
case 3626:
case 981:
case 2059:
case 895:
case 3567:
case 2414:
case 1955:
case 3722:
case 1611:
case 2887:
case 1292:
case 3005:
case 774:
case 2570:
case 2392:
case 322:
case 1024:
case 454:
case 84:
case 1741:
case 1820:
case 784:
case 3251:
case 2787:
case 1783:
case 2336:
case 1636:
case 3871:
case 2808:
case 3460:
case 2990:
case 2531:
case 1473:
case 1504:
case 1439:
case 2477:
case 2745:
case 1732:
case 3730:
case 1044:
case 324:
case 2946:
case 1610:
case 1210:
case 175:
case 3291:
case 782:
case 1433:
case 2607:
case 1840:
case 2767:
case 625:
case 2207:
case 381:
case 1964:
case 2066:
case 1763:
case 2303:
case 1479:
case 1603:
case 530:
case 1203:
case 2522:
case 1772:
case 1108:
case 3770:
case 3480:
case 1856:
case 1482:
case 3508:
case 857:
case 3017:
case 3831:
case 2376:
case 1057:
case 4039:
case 3423:
case 2141:
case 3461:
case 648:
case 3545:
case 2183:
case 1889:
case 3246:
case 505:
case 294:
case 1756:
case 2530:
case 1872:
case 1995:
case 899:
case 127:
case 1863:
case 413:
case 435:
case 167:
case 2169:
case 3587:
case 677:
case 1252:
case 4006:
case 814:
case 1821:
case 772:
case 2194:
case 2064:
case 1966:
case 3257:
case 2781:
case 3408:
case 2860:
case 1747:
case 3179:
case 3638:
case 3353:
case 3580:
case 3399:
case 2374:
case 1902:
case 307:
case 3898:
case 1274:
case 878:
case 1785:
case 3913:
case 3182:
case 442:
case 1180:
case 1854:
case 1885:
case 1012:
case 3010:
case 1091:
case 3644:
case 2938:
case 3549:
case 104:
case 1161:
case 3487:
case 2957:
case 1123:
case 690:
case 2829:
case 3366:
case 2430:
case 584:
case 4004:
case 2613:
case 521:
case 2118:
case 1149:
case 3561:
case 2165:
case 1217:
case 3076:
case 3523:
case 2760:
case 2600:
case 1993:
case 310:
case 2470:
case 1794:
case 1865:
case 886:
case 3624:
case 102:
case 3737:
case 1319:
case 2619:
case 1248:
case 3036:
case 198:
case 1818:
case 150:
case 2823:
case 67:
case 582:
case 656:
case 3581:
case 23:
case 2978:
case 3543:
case 2185:
case 2861:
case 2055:
case 4075:
case 2084:
case 338:
case 2880:
case 1539:
case 2601:
case 1234:
case 303:
case 2761:
case 1562:
case 572:
case 1404:
case 2924:
case 2723:
case 3858:
case 241:
case 1435:
case 3139:
case 1718:
case 2749:
case 3359:
case 3678:
case 2305:
case 1765:
case 1605:
case 820:
case 1894:
case 3092:
case 1205:
case 85:
case 444:
case 3011:
case 3974:
case 809:
case 1095:
case 3202:
case 2217:
case 3762:
case 1165:
case 3602:
case 778:
case 1881:
case 1760:
case 1600:
case 2999:
case 1430:
case 3527:
case 1118:
case 3739:
case 2149:
case 1213:
case 1613:
case 2228:
case 642:
case 401:
case 4042:
case 3266:
case 3666:
case 3706:
case 747:
case 2012:
case 2885:
case 1938:
case 3518:
case 2754:
case 4070:
case 1558:
case 553:
case 490:
case 3299:
case 54:
case 3917:
case 1729:
case 3806:
case 2274:
case 2046:
case 1944:
case 3653:
case 2582:
case 3158:
case 3338:
case 3862:
case 458:
case 2966:
case 370:
case 1860:
case 2475:
case 4016:
case 788:
case 39:
case 2894:
case 2765:
case 1305:
case 2605:
case 3879:
case 949:
case 2160:
case 141:
case 3833:
case 3659:
case 2718:
case 1749:
case 2435:
case 3259:
case 4030:
case 1723:
case 1431:
case 2573:
case 2026:
case 3068:
case 980:
case 3293:
case 3198:
case 368:
case 3397:
case 456:
case 1084:
case 3882:
case 3456:
case 2:
case 1761:
case 2301:
case 3948:
case 1154:
case 1201:
case 1880:
case 818:
case 3782:
case 1185:
case 2959:
case 75:
case 48:
case 760:
case 2827:
case 1861:
case 3905:
case 1978:
case 2129:
case 3547:
case 26:
case 970:
case 13:
case 2143:
case 3733:
case 3585:
case 1514:
case 1219:
case 2319:
case 644:
case 3686:
case 4022:
case 345:
case 298:
case 1997:
case 3286:
case 2865:
case 1470:
case 2993:
case 2051:
case 202:
case 3463:
case 3472:
case 62:
case 156:
case 3069:
case 4084:
case 1495:
case 2557:
case 650:
case 3382:
case 1553:
case 3949:
case 3897:
case 2680:
case 2801:
case 2280:
case 441:
case 3878:
case 309:
case 602:
case 1694:
case 2394:
case 3237:
case 3258:
case 3333:
case 3658:
case 698:
case 1748:
case 3961:
case 3083:
case 2491:
case 905:
case 1349:
case 2318:
case 918:
case 1218:
case 2544:
case 2249:
case 826:
case 2117:
case 870:
case 3778:
case 3102:
case 1705:
case 3824:
case 1100:
case 1566:
case 6:
case 2446:
case 1627:
case 2701:
case 2327:
case 3488:
case 1227:
case 1734:
case 3513:
case 522:
case 1979:
case 562:
case 1502:
case 1464:
case 2937:
case 18:
case 2075:
case 3166:
case 3960:
case 1828:
case 1962:
case 1329:
case 2524:
case 2229:
case 21:
case 1774:
case 2490:
case 3040:
case 868:
case 1685:
case 1285:
case 3519:
case 101:
case 3214:
case 1042:
case 2035:
case 1586:
case 710:
case 1817:
case 89:
case 1906:
case 330:
case 2681:
case 524:
case 2643:
case 3738:
case 2243:
case 3186:
case 158:
case 4064:
case 571:
case 3339:
case 1016:
case 1455:
case 845:
case 2713:
case 3277:
case 703:
case 2105:
case 3929:
case 1717:
case 738:
case 3857:
case 1360:
case 2700:
case 3021:
case 1559:
case 2354:
case 3943:
case 1654:
case 2578:
case 3072:
case 1874:
case 3193:
case 3306:
case 2464:
case 1937:
case 1223:
case 2323:
case 1075:
case 3994:
case 807:
case 3008:
case 28:
case 1446:
case 2734:
case 2227:
case 1261:
case 2361:
case 42:
case 780:
case 2665:
case 836:
case 1117:
case 3528:
case 2265:
case 2566:
case 2100:
case 2022:
case 4051:
case 2848:
case 1819:
case 2218:
case 1544:
case 2113:
case 3886:
case 511:
case 3759:
case 1649:
case 1318:
case 2748:
case 3927:
case 3138:
case 3233:
case 1491:
case 4090:
case 1394:
case 2805:
case 3574:
case 3679:
case 388:
case 1538:
case 4026:
case 2553:
case 1280:
case 1680:
case 63:
case 2495:
case 95:
case 27:
case 1174:
case 1557:
case 3965:
case 920:
case 3899:
case 947:
case 1578:
case 2728:
case 2070:
case 4050:
case 3766:
case 142:
case 3398:
case 3606:
case 3436:
case 3197:
case 1134:
case 1354:
case 2559:
case 2254:
case 2717:
case 3662:
case 3178:
case 3702:
case 3262:
case 386:
case 4046:
case 2360:
case 1700:
case 3853:
case 258:
case 1597:
case 1713:
case 3985:
case 3534:
case 2016:
case 534:
case 2119:
case 1643:
case 3954:
case 2343:
case 2031:
case 376:
case 320:
case 1998:
case 1681:
case 35:
case 2381:
case 1347:
case 2647:
case 2939:
case 2285:
case 3314:
case 2042:
case 803:
case 745:
case 4012:
case 1524:
case 1229:
case 11:
case 4091:
case 3411:
case 1629:
case 3866:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747332001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,];
var gg_b = "1747332001/";

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
