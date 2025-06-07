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
case 3136:
case 3784:
case 2629:
case 3381:
case 2221:
case 2535:
case 4037:
case 759:
case 2901:
case 2325:
case 3095:
case 1838:
case 226:
case 3484:
case 421:
case 1484:
case 2840:
case 2827:
case 1285:
case 1784:
case 3132:
case 2198:
case 440:
case 1034:
case 2875:
case 3664:
case 470:
case 463:
case 82:
case 1578:
case 4:
case 350:
case 1780:
case 2237:
case 3228:
case 604:
case 3578:
case 2999:
case 2722:
case 2594:
case 16:
case 3480:
case 72:
case 1174:
case 1145:
case 1272:
case 2793:
case 618:
case 3446:
case 3614:
case 858:
case 3526:
case 3276:
case 1442:
case 2:
case 3259:
case 1391:
case 1370:
case 240:
case 1295:
case 3746:
case 1085:
case 1332:
case 68:
case 1742:
case 3742:
case 3494:
case 639:
case 2787:
case 401:
case 1746:
case 1181:
case 3295:
case 758:
case 3522:
case 2487:
case 1651:
case 2613:
case 2021:
case 1824:
case 1526:
case 3272:
case 2580:
case 1614:
case 70:
case 3597:
case 3241:
case 4048:
case 997:
case 96:
case 221:
case 552:
case 426:
case 3490:
case 3471:
case 3309:
case 1820:
case 533:
case 950:
case 2886:
case 2989:
case 3374:
case 574:
case 647:
case 3771:
case 3790:
case 2398:
case 3028:
case 2869:
case 2966:
case 2658:
case 1028:
case 3583:
case 3610:
case 2373:
case 1735:
case 3820:
case 1234:
case 1471:
case 2188:
case 2233:
case 1597:
case 324:
case 2254:
case 1408:
case 2829:
case 2926:
case 3068:
case 347:
case 1980:
case 2211:
case 2455:
case 830:
case 1638:
case 2315:
case 3057:
case 422:
case 2755:
case 556:
case 377:
case 177:
case 2202:
case 1057:
case 2499:
case 4039:
case 3638:
case 3708:
case 764:
case 124:
case 730:
case 2922:
case 2304:
case 4002:
case 2644:
case 2416:
case 139:
case 365:
case 1303:
case 38:
case 2675:
case 2356:
case 3566:
case 2165:
case 3984:
case 1218:
case 2716:
case 2863:
case 3218:
case 2061:
case 1984:
case 2352:
case 2250:
case 118:
case 1566:
case 1864:
case 2696:
case 3107:
case 165:
case 3643:
case 4006:
case 947:
case 3814:
case 3624:
case 2789:
case 3971:
case 594:
case 3053:
case 650:
case 1268:
case 3851:
case 810:
case 1257:
case 2489:
case 977:
case 2466:
case 710:
case 1501:
case 2462:
case 2813:
case 2100:
case 3512:
case 1053:
case 1935:
case 304:
case 2762:
case 1624:
case 1516:
case 965:
case 257:
case 3555:
case 705:
case 2179:
case 1942:
case 2156:
case 1620:
case 2993:
case 290:
case 119:
case 918:
case 3018:
case 1647:
case 2261:
case 1994:
case 1599:
case 2104:
case 3599:
case 2858:
case 2978:
case 3810:
case 319:
case 805:
case 3103:
case 138:
case 2987:
case 2039:
case 1946:
case 1849:
case 1555:
case 939:
case 2867:
case 2228:
case 3388:
case 1892:
case 1726:
case 748:
case 3722:
case 3896:
case 1546:
case 3173:
case 2480:
case 3377:
case 301:
case 1875:
case 2908:
case 3542:
case 2843:
case 1033:
case 2587:
case 1422:
case 2174:
case 3198:
case 921:
case 591:
case 26:
case 3426:
case 3844:
case 3546:
case 1594:
case 1999:
case 1722:
case 2593:
case 1237:
case 803:
case 589:
case 3840:
case 1325:
case 1048:
case 3617:
case 2191:
case 2170:
case 2838:
case 906:
case 1629:
case 2059:
case 2132:
case 1221:
case 1497:
case 1916:
case 1819:
case 2076:
case 3783:
case 1590:
case 717:
case 3912:
case 554:
case 1912:
case 3571:
case 3590:
case 9:
case 970:
case 2784:
case 2381:
case 3497:
case 1827:
case 572:
case 3901:
case 1483:
case 657:
case 2484:
case 940:
case 2583:
case 4076:
case 2847:
case 879:
case 1869:
case 3882:
case 2820:
case 1886:
case 3962:
case 1584:
case 3233:
case 761:
case 3667:
case 901:
case 782:
case 2241:
case 1188:
case 2597:
case 1667:
case 779:
case 2471:
case 1373:
case 3584:
case 3989:
case 882:
case 861:
case 1882:
case 3869:
case 3037:
case 749:
case 2790:
case 2230:
case 3478:
case 140:
case 1493:
case 2295:
case 3823:
case 3778:
case 2794:
case 723:
case 3613:
case 1125:
case 1793:
case 3580:
case 370:
case 363:
case 2446:
case 1580:
case 2614:
case 3:
case 3125:
case 1021:
case 1613:
case 450:
case 1487:
case 837:
case 1823:
case 1248:
case 3493:
case 2336:
case 106:
case 485:
case 823:
case 46:
case 497:
case 3061:
case 3352:
case 2562:
case 1716:
case 3696:
case 1401:
case 1379:
case 3983:
case 1644:
case 302:
case 2303:
case 606:
case 1675:
case 3412:
case 1304:
case 1631:
case 3304:
case 1412:
case 640:
case 3701:
case 3631:
case 3997:
case 28:
case 3675:
case 265:
case 1250:
case 1983:
case 3379:
case 663:
case 1696:
case 4053:
case 520:
case 990:
case 2984:
case 2589:
case 3692:
case 798:
case 3640:
case 2708:
case 1315:
case 1926:
case 2980:
case 1455:
case 1211:
case 2253:
case 3799:
case 3922:
case 224:
case 3254:
case 1799:
case 1922:
case 3619:
case 983:
case 4018:
case 3926:
case 3829:
case 2068:
case 898:
case 247:
case 1627:
case 3315:
case 1300:
case 535:
case 277:
case 1640:
case 1202:
case 3978:
case 500:
case 1261:
case 2599:
case 1104:
case 3682:
case 1669:
case 2620:
case 1050:
case 219:
case 1686:
case 190:
case 2942:
case 122:
case 157:
case 3867:
case 781:
case 3152:
case 3039:
case 762:
case 1152:
case 2849:
case 4057:
case 576:
case 1867:
case 3156:
case 1508:
case 322:
case 3686:
case 2805:
case 862:
case 3050:
case 881:
case 1858:
case 3104:
case 2018:
case 1002:
case 439:
case 601:
case 3462:
case 3100:
case 1115:
case 1766:
case 899:
case 3813:
case 3054:
case 1789:
case 2935:
case 1762:
case 515:
case 3766:
case 2971:
case 1100:
case 2990:
case 1623:
case 1011:
case 1462:
case 3002:
case 2501:
case 3466:
case 568:
case 3720:
case 2074:
case 3098:
case 2328:
case 4081:
case 1835:
case 1871:
case 2913:
case 1951:
case 1073:
case 3277:
case 1447:
case 931:
case 1420:
case 2486:
case 3951:
case 2134:
case 3871:
case 1747:
case 3890:
case 945:
case 1098:
case 2141:
case 3914:
case 3519:
case 1337:
case 2172:
case 1575:
case 1949:
case 1544:
case 2036:
case 136:
case 2543:
case 2887:
case 1225:
case 713:
case 2423:
case 2195:
case 1724:
case 2662:
case 3910:
case 1592:
case 2878:
case 1596:
case 813:
case 64:
case 2281:
case 3321:
case 1148:
case 2091:
case 3592:
case 280:
case 2689:
case 3724:
case 2893:
case 916:
case 2159:
case 2032:
case 1842:
case 2385:
case 0:
case 967:
case 3846:
case 632:
case 3575:
case 3424:
case 1088:
case 1298:
case 2612:
case 3523:
case 3880:
case 4036:
case 131:
case 3743:
case 175:
case 1137:
case 1333:
case 2775:
case 2341:
case 375:
case 2209:
case 2601:
case 2616:
case 345:
case 1880:
case 1273:
case 2792:
case 2826:
case 2929:
case 2524:
case 2431:
case 1523:
case 4091:
case 3298:
case 2245:
case 3088:
case 1443:
case 4070:
case 480:
case 4009:
case 50:
case 3608:
case 3738:
case 2727:
case 2330:
case 2232:
case 2395:
case 3348:
case 2740:
case 19:
case 2270:
case 733:
case 2081:
case 4045:
case 2427:
case 1569:
case 3582:
case 1964:
case 4074:
case 2547:
case 3438:
case 116:
case 1884:
case 774:
case 2372:
case 2963:
case 844:
case 3884:
case 827:
case 1438:
case 2359:
case 3569:
case 936:
case 367:
case 39:
case 874:
case 1025:
case 1348:
case 2655:
case 833:
case 1608:
case 2318:
case 1449:
case 1924:
case 1529:
case 3252:
case 2467:
case 1705:
case 2923:
case 1671:
case 2560:
case 1690:
case 1256:
case 2758:
case 1405:
case 2203:
case 208:
case 1749:
case 1161:
case 3065:
case 3517:
case 1204:
case 1517:
case 1065:
case 69:
case 3339:
case 932:
case 3749:
case 3405:
case 856:
case 312:
case 3690:
case 3671:
case 1710:
case 3635:
case 953:
case 530:
case 1414:
case 3302:
case 3200:
case 1451:
case 2687:
case 2413:
case 1306:
case 2157:
case 3563:
case 1714:
case 3947:
case 3694:
case 1354:
case 2982:
case 2713:
case 2564:
case 3354:
case 1694:
case 2866:
case 2969:
case 3751:
case 645:
case 273:
case 2889:
case 260:
case 3311:
case 3714:
case 3306:
case 1642:
case 675:
case 3646:
case 409:
case 428:
case 25:
case 243:
case 525:
case 3513:
case 2812:
case 14:
case 153:
case 794:
case 2763:
case 3680:
case 3938:
case 132:
case 17:
case 37:
case 510:
case 3265:
case 45:
case 3464:
case 636:
case 2514:
case 1680:
case 2816:
case 34:
case 353:
case 2626:
case 434:
case 912:
case 3764:
case 3361:
case 1513:
case 473:
case 2551:
case 429:
case 1154:
case 3943:
case 1000:
case 2357:
case 3567:
case 187:
case 751:
case 3558:
case 2368:
case 2417:
case 2683:
case 3760:
case 2992:
case 1102:
case 611:
case 1760:
case 3106:
case 1558:
case 2975:
case 2429:
case 3111:
case 1015:
case 395:
case 2855:
case 2944:
case 2549:
case 1808:
case 1460:
case 3154:
case 1723:
case 3666:
case 1958:
case 2905:
case 2321:
case 2592:
case 2724:
case 3385:
case 2531:
case 2225:
case 431:
case 2575:
case 2424:
case 2544:
case 2949:
case 2846:
case 355:
case 236:
case 1036:
case 155:
case 2842:
case 1176:
case 3195:
case 2148:
case 1070:
case 1689:
case 2596:
case 1666:
case 3878:
case 467:
case 3469:
case 1482:
case 789:
case 1538:
case 3486:
case 614:
case 1009:
case 2890:
case 1913:
case 2073:
case 2914:
case 2519:
case 3786:
case 517:
case 2835:
case 872:
case 3045:
case 1786:
case 2288:
case 2337:
case 3074:
case 2133:
case 1769:
case 3782:
case 503:
case 2747:
case 2420:
case 2277:
case 1486:
case 3538:
case 73:
case 2586:
case 216:
case 980:
case 411:
case 1291:
case 2964:
case 2569:
case 3359:
case 1547:
case 3419:
case 1232:
case 1395:
case 955:
case 3897:
case 1740:
case 29:
case 561:
case 3236:
case 582:
case 1330:
case 608:
case 3330:
case 2738:
case 579:
case 3740:
case 1655:
case 3395:
case 2348:
case 1376:
case 3883:
case 1185:
case 1359:
case 3699:
case 3372:
case 3963:
case 549:
case 3440:
case 3744:
case 1128:
case 3341:
case 275:
case 3775:
case 3334:
case 3209:
case 1917:
case 3601:
case 436:
case 231:
case 888:
case 3929:
case 3475:
case 3524:
case 3444:
case 3616:
case 523:
case 634:
case 3245:
case 1822:
case 896:
case 1612:
case 3431:
case 2960:
case 3612:
case 71:
case 2523:
case 1431:
case 1274:
case 2443:
case 3822:
case 1245:
case 1475:
case 1524:
case 2273:
case 1929:
case 1792:
case 3496:
case 1334:
case 1209:
case 1601:
case 1492:
case 1775:
case 788:
case 1341:
case 3564:
case 2354:
case 1982:
case 3969:
case 3866:
case 44:
case 453:
case 2311:
case 1157:
case 3693:
case 892:
case 1862:
case 360:
case 3986:
case 47:
case 1687:
case 2306:
case 1168:
case 820:
case 792:
case 143:
case 2200:
case 3687:
case 3413:
case 1986:
case 173:
case 160:
case 3353:
case 2563:
case 1866:
case 3982:
case 720:
case 134:
case 3713:
case 2947:
case 3678:
case 4000:
case 928:
case 1458:
case 769:
case 2161:
case 586:
case 1203:
case 1767:
case 2405:
case 129:
case 2749:
case 1923:
case 2256:
case 1318:
case 871:
case 2449:
case 2924:
case 2705:
case 1467:
case 2710:
case 2252:
case 3318:
case 3758:
case 1007:
case 3923:
case 3560:
case 308:
case 329:
case 2410:
case 3203:
case 735:
case 3458:
case 4015:
case 3992:
case 3729:
case 3505:
case 700:
case 412:
case 973:
case 960:
case 693:
case 1683:
case 934:
case 3855:
case 3549:
case 2000:
case 3429:
case 1357:
case 2111:
case 1153:
case 3697:
case 314:
case 3931:
case 2154:
case 114:
case 1931:
case 776:
case 2808:
case 2460:
case 1975:
case 1697:
case 3153:
case 2015:
case 2567:
case 4065:
case 1855:
case 1944:
case 746:
case 2760:
case 2558:
case 2102:
case 3510:
case 2265:
case 1463:
case 27:
case 309:
case 232:
case 815:
case 655:
case 24:
case 3626:
case 1207:
case 1763:
case 3816:
case 1622:
case 2052:
case 2361:
case 680:
case 3812:
case 715:
case 2513:
case 3207:
case 1919:
case 2680:
case 1626:
case 2150:
case 3927:
case 2938:
case 1801:
case 929:
case 599:
case 908:
case 768:
case 3463:
case 2378:
case 649:
case 3791:
case 3394:
case 3432:
case 1219:
case 3907:
case 1023:
case 3491:
case 3342:
case 1736:
case 2238:
case 529:
case 999:
case 3732:
case 1346:
case 3184:
case 1602:
case 386:
case 661:
case 2965:
case 1240:
case 2885:
case 3606:
case 398:
case 1227:
case 1491:
case 1470:
case 1588:
case 3821:
case 3219:
case 1432:
case 2393:
case 3023:
case 1770:
case 3654:
case 2243:
case 1445:
case 2122:
case 1709:
case 1231:
case 3180:
case 1275:
case 2473:
case 1409:
case 3650:
case 1745:
case 3296:
case 802:
case 2618:
case 1335:
case 2828:
case 1082:
case 3082:
case 1069:
case 3292:
case 2047:
case 3745:
case 1086:
case 3390:
case 2020:
case 3371:
case 1650:
case 3774:
case 543:
case 2126:
case 225:
case 1180:
case 981:
case 3639:
case 637:
case 3474:
case 3231:
case 3525:
case 4038:
case 1384:
case 1598:
case 3019:
case 2383:
case 3223:
case 2187:
case 3848:
case 399:
case 1027:
case 3903:
case 1481:
case 2830:
case 2178:
case 998:
case 425:
case 883:
case 3481:
case 678:
case 2193:
case 210:
case 199:
case 1019:
case 1223:
case 2876:
case 4047:
case 2425:
case 2545:
case 3598:
case 648:
case 1135:
case 722:
case 2488:
case 3833:
case 3044:
case 162:
case 2788:
case 1096:
case 2477:
case 603:
case 790:
case 1661:
case 2570:
case 3282:
case 1269:
case 3092:
case 857:
case 3661:
case 617:
case 1380:
case 464:
case 3096:
case 514:
case 666:
case 2915:
case 1075:
case 381:
case 3190:
case 1044:
case 890:
case 2834:
case 2536:
case 362:
case 1833:
case 1031:
case 2260:
case 4064:
case 1945:
case 303:
case 1811:
case 2362:
case 3552:
case 2973:
case 1229:
case 2051:
case 1013:
case 726:
case 3217:
case 259:
case 3802:
case 1802:
case 2685:
case 1217:
case 3806:
case 3909:
case 3229:
case 2155:
case 3621:
case 3811:
case 1108:
case 3945:
case 103:
case 3579:
case 3500:
case 1515:
case 699:
case 1936:
case 178:
case 2049:
case 979:
case 3407:
case 3932:
case 148:
case 3850:
case 801:
case 3991:
case 2005:
case 3707:
case 3263:
case 2818:
case 949:
case 2628:
case 2465:
case 1637:
case 580:
case 2264:
case 1970:
case 2101:
case 1991:
case 4060:
case 458:
case 2765:
case 22:
case 555:
case 2116:
case 3936:
case 378:
case 1500:
case 982:
case 3067:
case 7:
case 806:
case 2507:
case 2672:
case 2400:
case 2868:
case 3029:
case 2399:
case 763:
case 3213:
case 1565:
case 2695:
case 1017:
case 2162:
case 4049:
case 2857:
case 137:
case 740:
case 2715:
case 258:
case 863:
case 870:
case 337:
case 3017:
case 3565:
case 8:
case 2189:
case 2676:
case 1029:
case 2415:
case 2060:
case 4010:
case 379:
case 459:
case 182:
case 20:
case 161:
case 2210:
case 4014:
case 3258:
case 2312:
case 2404:
case 2756:
case 948:
case 2316:
case 1403:
case 2205:
case 3981:
case 978:
case 2925:
case 2479:
case 382:
case 2634:
case 1703:
case 1633:
case 2335:
case 3581:
case 1828:
case 1773:
case 2292:
case 3020:
case 88:
case 2409:
case 2774:
case 3798:
case 865:
case 4040:
case 818:
case 325:
case 3498:
case 4027:
case 1243:
case 2709:
case 1122:
case 3122:
case 499:
case 765:
case 3243:
case 125:
case 1126:
case 3473:
case 1798:
case 2086:
case 839:
case 1020:
case 1581:
case 718:
case 2069:
case 3773:
case 3828:
case 2837:
case 4019:
case 2184:
case 824:
case 1183:
case 3885:
case 847:
case 2606:
case 2736:
case 298:
case 3197:
case 2611:
case 2023:
case 330:
case 2821:
case 512:
case 877:
case 1024:
case 2791:
case 2770:
case 164:
case 2394:
case 2588:
case 4092:
case 2432:
case 3653:
case 1885:
case 3238:
case 3387:
case 2470:
case 2227:
case 777:
case 4044:
case 2577:
case 1965:
case 2661:
case 719:
case 1570:
case 2269:
case 1247:
case 2286:
case 3326:
case 838:
case 684:
case 1220:
case 3915:
case 2171:
case 1532:
case 3841:
case 587:
case 3043:
case 1043:
case 2833:
case 3777:
case 3532:
case 2031:
case 1915:
case 3900:
case 2075:
case 2044:
case 1536:
case 305:
case 3220:
case 3477:
case 2380:
case 1326:
case 3247:
case 3591:
case 3570:
case 2282:
case 3322:
case 3725:
case 532:
case 1830:
case 1178:
case 57:
case 310:
case 3038:
case 1657:
case 2027:
case 3397:
case 1668:
case 3859:
case 3956:
case 3876:
case 3574:
case 964:
case 1383:
case 3425:
case 2781:
case 3224:
case 2384:
case 54:
case 3872:
case 4086:
case 3952:
case 3383:
case 1574:
case 2223:
case 1979:
case 1545:
case 1859:
case 4069:
case 1397:
case 1193:
case 3657:
case 299:
case 110:
case 3830:
case 1904:
case 804:
case 1509:
case 2058:
case 1628:
case 897:
case 86:
case 3010:
case 3264:
case 423:
case 1112:
case 437:
case 2515:
case 610:
case 4017:
case 2839:
case 850:
case 785:
case 3049:
case 90:
case 76:
case 797:
case 2500:
case 1765:
case 2932:
case 1116:
case 1010:
case 750:
case 2970:
case 1101:
case 2850:
case 2637:
case 2263:
case 1465:
case 3818:
case 3685:
case 2806:
case 2504:
case 4063:
case 217:
case 2811:
case 1853:
case 3389:
case 1362:
case 2229:
case 1973:
case 3155:
case 2579:
case 2974:
case 1260:
case 1014:
case 384:
case 2854:
case 3998:
case 511:
case 2945:
case 184:
case 1998:
case 3014:
case 3362:
case 2552:
case 3973:
case 3051:
case 3853:
case 2217:
case 3199:
case 2861:
case 3756:
case 4013:
case 630:
case 3779:
case 2063:
case 417:
case 3205:
case 2981:
case 516:
case 3925:
case 3479:
case 466:
case 282:
case 3704:
case 10:
case 3249:
case 567:
case 1452:
case 3452:
case 2633:
case 2267:
case 1249:
case 1301:
case 1925:
case 1634:
case 249:
case 3210:
case 1205:
case 2403:
case 1404:
case 2258:
case 531:
case 358:
case 1630:
case 1695:
case 2017:
case 3355:
case 1162:
case 3189:
case 1857:
case 3415:
case 4058:
case 223:
case 1507:
case 3060:
case 3988:
case 1676:
case 3868:
case 3399:
case 2029:
case 1251:
case 959:
case 1355:
case 3695:
case 2648:
case 1189:
case 3977:
case 3700:
case 1715:
case 1166:
case 1433:
case 915:
case 4094:
case 1026:
case 2679:
case 2080:
case 169:
case 256:
case 2186:
case 335:
case 2344:
case 1120:
case 2375:
case 451:
case 4042:
case 1343:
case 3147:
case 3120:
case 2957:
case 135:
case 4046:
case 829:
case 808:
case 2968:
case 141:
case 3433:
case 2246:
case 1748:
case 834:
case 3124:
case 976:
case 392:
case 2825:
case 873:
case 3881:
case 1528:
case 946:
case 320:
case 1448:
case 3083:
case 3293:
case 2319:
case 61:
case 3961:
case 85:
case 3278:
case 4090:
case 2294:
case 2430:
case 2084:
case 2772:
case 1293:
case 120:
case 734:
case 4035:
case 3287:
case 743:
case 502:
case 2795:
case 3748:
case 2472:
case 1143:
case 1347:
case 941:
case 3576:
case 3874:
case 2369:
case 3559:
case 3954:
case 2898:
case 294:
case 1607:
case 3911:
case 1572:
case 2144:
case 828:
case 2386:
case 1530:
case 971:
case 368:
case 3809:
case 2665:
case 1437:
case 1595:
case 2192:
case 1902:
case 3595:
case 3437:
case 2428:
case 168:
case 1906:
case 3530:
case 4084:
case 2873:
case 2728:
case 115:
case 2953:
case 3572:
case 2071:
case 2280:
case 1954:
case 2382:
case 2035:
case 3347:
case 3143:
case 1874:
case 1576:
case 992:
case 63:
case 3087:
case 3297:
case 672:
case 3421:
case 1832:
case 376:
case 2042:
case 557:
case 2485:
case 1283:
case 1870:
case 654:
case 920:
case 3324:
case 2284:
case 3721:
case 642:
case 1324:
case 1721:
case 1078:
case 3891:
case 3870:
case 300:
case 714:
case 1297:
case 2046:
case 1836:
case 689:
case 3149:
case 646:
case 433:
case 354:
case 2959:
case 2856:
case 3364:
case 2879:
case 1110:
case 189:
case 996:
case 526:
case 893:
case 372:
case 988:
case 427:
case 1461:
case 2158:
case 172:
case 13:
case 3110:
case 389:
case 2677:
case 3948:
case 1105:
case 3001:
case 142:
case 3016:
case 1364:
case 2363:
case 2852:
case 2008:
case 213:
case 2539:
case 1055:
case 3151:
case 2625:
case 2815:
case 1262:
case 3099:
case 615:
case 2550:
case 2768:
case 1266:
case 780:
case 2457:
case 1099:
case 191:
case 2468:
case 2800:
case 207:
case 755:
case 3055:
case 2113:
case 1151:
case 2757:
case 3933:
case 1750:
case 3674:
case 942:
case 1568:
case 1807:
case 563:
case 3921:
case 3305:
case 1310:
case 972:
case 3164:
case 3609:
case 3739:
case 413:
case 2985:
case 4008:
case 3201:
case 1557:
case 93:
case 540:
case 3557:
case 2163:
case 407:
case 989:
case 3450:
case 1739:
case 1164:
case 1305:
case 3310:
case 3807:
case 11:
case 1216:
case 3568:
case 2358:
case 3212:
case 1439:
case 1674:
case 635:
case 3454:
case 1160:
case 521:
case 3706:
case 1632:
case 3255:
case 3406:
case 274:
case 1670:
case 3351:
case 2561:
case 1299:
case 1089:
case 1402:
case 641:
case 3066:
case 2928:
case 3402:
case 1711:
case 3937:
case 3691:
case 3089:
case 3702:
case 1411:
case 2208:
case 1636:
case 1706:
case 669:
case 1454:
case 3294:
case 3430:
case 3772:
case 2448:
case 3495:
case 1319:
case 2338:
case 3242:
case 1476:
case 1459:
case 3730:
case 3600:
case 3123:
case 2287:
case 1615:
case 3795:
case 1246:
case 3340:
case 468:
case 1795:
case 2124:
case 3459:
case 1730:
case 1327:
case 3615:
case 1123:
case 292:
case 1242:
case 1537:
case 2881:
case 3776:
case 1430:
case 1294:
case 415:
case 3182:
case 2343:
case 2147:
case 1186:
case 3877:
case 269:
case 1344:
case 1375:
case 2603:
case 1080:
case 1290:
case 3888:
case 4093:
case 1441:
case 674:
case 3441:
case 547:
case 3392:
case 2022:
case 3521:
case 3235:
case 524:
case 3271:
case 241:
case 1968:
case 3375:
case 1957:
case 644:
case 3741:
case 1877:
case 356:
case 3186:
case 577:
case 271:
case 3331:
case 476:
case 1182:
case 519:
case 3140:
case 1284:
case 1094:
case 4026:
case 3323:
case 2891:
case 2870:
case 2138:
case 200:
case 2832:
case 151:
case 3046:
case 469:
case 435:
case 3785:
case 2534:
case 2836:
case 538:
case 276:
case 2541:
case 3119:
case 2087:
case 471:
case 887:
case 2721:
case 3428:
case 2595:
case 1665:
case 2902:
case 1192:
case 2530:
case 77:
case 2572:
case 3071:
case 1144:
case 3873:
case 2347:
case 2143:
case 74:
case 1369:
case 3035:
case 194:
case 753:
case 3898:
case 1382:
case 420:
case 1035:
case 4083:
case 2576:
case 2874:
case 1728:
case 2226:
case 1953:
case 1071:
case 2906:
case 84:
case 1196:
case 853:
case 3665:
case 1428:
case 2360:
case 1329:
case 2518:
case 1539:
case 1934:
case 736:
case 3113:
case 3468:
case 3800:
case 113:
case 1008:
case 1757:
case 2114:
case 56:
case 3008:
case 3941:
case 313:
case 1468:
case 1800:
case 952:
case 291:
case 3815:
case 3934:
case 3539:
case 496:
case 3625:
case 1317:
case 944:
case 550:
case 2681:
case 1457:
case 2289:
case 3329:
case 41:
case 1550:
case 1768:
case 1506:
case 3158:
case 3930:
case 3502:
case 289:
case 3995:
case 2948:
case 2001:
case 4066:
case 1554:
case 1976:
case 3852:
case 3688:
case 2553:
case 3167:
case 711:
case 1167:
case 3511:
case 1688:
case 2149:
case 2761:
case 254:
case 3856:
case 2364:
case 3554:
case 1677:
case 651:
case 2461:
case 3804:
case 2402:
case 4016:
case 3928:
case 133:
case 174:
case 1561:
case 3313:
case 3117:
case 716:
case 2702:
case 1129:
case 3453:
case 144:
case 2160:
case 79:
case 767:
case 907:
case 489:
case 4001:
case 3208:
case 816:
case 2706:
case 2454:
case 43:
case 472:
case 913:
case 374:
case 3561:
case 2351:
case 2754:
case 4012:
case 867:
case 89:
case 2406:
case 333:
case 2314:
case 2711:
case 2557:
case 731:
case 1865:
case 4055:
case 2450:
case 775:
case 1985:
case 2310:
case 3673:
case 2212:
case 2568:
case 3698:
case 875:
case 2439:
case 2674:
case 2305:
case 1673:
case 831:
case 21:
case 1718:
case 2164:
case 2609:
case 2739:
case 3985:
case 2201:
case 845:
case 3865:
case 1163:
case 1367:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749330001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,];
var gg_b = "1749330001/";

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
