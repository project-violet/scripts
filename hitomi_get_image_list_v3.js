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
case 2329:
case 2948:
case 3915:
case 2946:
case 2558:
case 2680:
case 484:
case 1540:
case 1453:
case 2756:
case 1950:
case 3904:
case 1524:
case 248:
case 1574:
case 1568:
case 2846:
case 861:
case 3815:
case 4000:
case 2517:
case 648:
case 1606:
case 1766:
case 307:
case 2293:
case 1145:
case 50:
case 1724:
case 455:
case 1850:
case 761:
case 1768:
case 1612:
case 3149:
case 33:
case 2463:
case 950:
case 2563:
case 1934:
case 445:
case 164:
case 3171:
case 658:
case 2024:
case 2417:
case 1466:
case 2068:
case 2603:
case 2066:
case 2763:
case 966:
case 1474:
case 1298:
case 280:
case 1017:
case 3638:
case 2132:
case 622:
case 1440:
case 3596:
case 627:
case 3796:
case 4083:
case 227:
case 1197:
case 2456:
case 665:
case 1199:
case 2361:
case 2853:
case 1290:
case 397:
case 1351:
case 3611:
case 964:
case 2046:
case 3015:
case 1448:
case 1446:
case 3590:
case 2101:
case 1050:
case 2953:
case 3335:
case 2450:
case 2543:
case 1339:
case 3169:
case 812:
case 1165:
case 600:
case 908:
case 3182:
case 1043:
case 496:
case 200:
case 3260:
case 2519:
case 1958:
case 1817:
case 717:
case 1172:
case 712:
case 3993:
case 2868:
case 2750:
case 1956:
case 2824:
case 2434:
case 1305:
case 4012:
case 3248:
case 2155:
case 1858:
case 468:
case 1760:
case 2974:
case 2377:
case 571:
case 2327:
case 353:
case 2703:
case 1412:
case 195:
case 79:
case 2008:
case 668:
case 2012:
case 686:
case 3044:
case 841:
case 956:
case 268:
case 2883:
case 3538:
case 1894:
case 3313:
case 2192:
case 1381:
case 1653:
case 3696:
case 185:
case 2480:
case 3321:
case 696:
case 3736:
case 3033:
case 1137:
case 88:
case 400:
case 3738:
case 905:
case 3212:
case 3928:
case 31:
case 3964:
case 3152:
case 3976:
case 517:
case 3926:
case 3206:
case 512:
case 1640:
case 771:
case 2185:
case 3878:
case 3876:
case 1706:
case 1003:
case 4060:
case 204:
case 465:
case 3684:
case 2233:
case 1512:
case 1508:
case 3473:
case 2177:
case 2812:
case 2588:
case 2650:
case 3423:
case 146:
case 2127:
case 4040:
case 3200:
case 1114:
case 2806:
case 2619:
case 2786:
case 3430:
case 422:
case 2355:
case 490:
case 3933:
case 1648:
case 944:
case 606:
case 1105:
case 2912:
case 2228:
case 2494:
case 2264:
case 379:
case 478:
case 1372:
case 2906:
case 1700:
case 1322:
case 1880:
case 3554:
case 458:
case 480:
case 1500:
case 4024:
case 645:
case 832:
case 4074:
case 4068:
case 837:
case 3135:
case 326:
case 1223:
case 1139:
case 985:
case 694:
case 1230:
case 1151:
case 2634:
case 3283:
case 1583:
case 3511:
case 3026:
case 160:
case 954:
case 1803:
case 3078:
case 3064:
case 3530:
case 3730:
case 2486:
case 284:
case 156:
case 3395:
case 3711:
case 2488:
case 974:
case 2819:
case 208:
case 2566:
case 2568:
case 1848:
case 3644:
case 2524:
case 2774:
case 2768:
case 2612:
case 342:
case 2724:
case 1293:
case 591:
case 3118:
case 54:
case 2766:
case 2063:
case 900:
case 2919:
case 476:
case 460:
case 2740:
case 1946:
case 2284:
case 3633:
case 1379:
case 3593:
case 3325:
case 1385:
case 3096:
case 4088:
case 3793:
case 1756:
case 581:
case 3620:
case 3157:
case 1860:
case 3098:
case 3670:
case 2540:
case 3217:
case 456:
case 1132:
case 713:
case 2834:
case 1040:
case 122:
case 3990:
case 2056:
case 3084:
case 405:
case 357:
case 4094:
case 264:
case 839:
case 1563:
case 2934:
case 2843:
case 178:
case 2298:
case 1763:
case 2474:
case 158:
case 2468:
case 2466:
case 1074:
case 664:
case 1417:
case 666:
case 670:
case 1419:
case 3415:
case 1101:
case 1743:
case 1046:
case 288:
case 3234:
case 978:
case 250:
case 2339:
case 3404:
case 1543:
case 2863:
case 266:
case 270:
case 1450:
case 2050:
case 3996:
case 519:
case 1361:
case 298:
case 4003:
case 990:
case 1060:
case 1694:
case 501:
case 2290:
case 444:
case 3896:
case 698:
case 454:
case 1155:
case 3342:
case 1215:
case 2305:
case 495:
case 3387:
case 1434:
case 1924:
case 3110:
case 2856:
case 1974:
case 1377:
case 3250:
case 1966:
case 474:
case 3131:
case 2858:
case 2917:
case 2314:
case 3715:
case 1940:
case 2043:
case 1719:
case 640:
case 1686:
case 1688:
case 2748:
case 223:
case 3504:
case 240:
case 1750:
case 2956:
case 3628:
case 1824:
case 2548:
case 3664:
case 3704:
case 623:
case 3676:
case 1519:
case 100:
case 2172:
case 2817:
case 2381:
case 1192:
case 3923:
case 4043:
case 3973:
case 2080:
case 819:
case 994:
case 685:
case 3930:
case 2406:
case 1012:
case 701:
case 1008:
case 674:
case 833:
case 186:
case 1006:
case 1663:
case 2412:
case 2408:
case 2238:
case 3830:
case 1332:
case 733:
case 498:
case 1270:
case 2003:
case 2706:
case 1900:
case 906:
case 2674:
case 1185:
case 2712:
case 3544:
case 399:
case 1179:
case 3125:
case 244:
case 2888:
case 1129:
case 3175:
case 104:
case 2886:
case 2506:
case 3318:
case 945:
case 3720:
case 1800:
case 3770:
case 4019:
case 450:
case 2345:
case 1656:
case 1780:
case 3570:
case 470:
case 2640:
case 3038:
case 2322:
case 2700:
case 464:
case 2372:
case 1276:
case 1278:
case 84:
case 3191:
case 891:
case 4017:
case 605:
case 3776:
case 3331:
case 1650:
case 1588:
case 3778:
case 229:
case 1177:
case 781:
case 1808:
case 2105:
case 3187:
case 2483:
case 3528:
case 3030:
case 2648:
case 3564:
case 4056:
case 3615:
case 629:
case 3526:
case 3011:
case 646:
case 3359:
case 1083:
case 656:
case 3426:
case 325:
case 3478:
case 2803:
case 2583:
case 276:
case 3294:
case 2783:
case 2086:
case 968:
case 1488:
case 256:
case 660:
case 1161:
case 175:
case 2139:
case 996:
case 2223:
case 1000:
case 2903:
case 1794:
case 85:
case 2273:
case 3054:
case 2211:
case 1594:
case 1634:
case 87:
case 4063:
case 2230:
case 155:
case 34:
case 2839:
case 3452:
case 2792:
case 542:
case 391:
case 547:
case 3136:
case 238:
case 1737:
case 2:
case 2103:
case 3062:
case 1681:
case 2741:
case 3396:
case 3621:
case 583:
case 1079:
case 1861:
case 3025:
case 3237:
case 2529:
case 2356:
case 725:
case 1112:
case 711:
case 1108:
case 2785:
case 3667:
case 1106:
case 2441:
case 2358:
case 1340:
case 528:
case 3991:
case 3842:
case 825:
case 3887:
case 2729:
case 2805:
case 2779:
case 3507:
case 1927:
case 1207:
case 1324:
case 1368:
case 1374:
case 37:
case 2262:
case 2492:
case 557:
case 2037:
case 2180:
case 4022:
case 809:
case 3987:
case 2905:
case 2275:
case 35:
case 1985:
case 3435:
case 3989:
case 319:
case 3962:
case 3154:
case 2319:
case 2287:
case 4045:
case 1979:
case 1929:
case 1885:
case 3509:
case 2727:
case 531:
case 3862:
case 767:
case 2186:
case 1514:
case 2291:
case 2461:
case 3682:
case 862:
case 2577:
case 3825:
case 1061:
case 3647:
case 3709:
case 1705:
case 1829:
case 1665:
case 3123:
case 2427:
case 1235:
case 3173:
case 2477:
case 1841:
case 1992:
case 1414:
case 3130:
case 2761:
case 2005:
case 3042:
case 899:
case 1405:
case 3251:
case 3409:
case 914:
case 2194:
case 1739:
case 789:
case 4081:
case 3695:
case 889:
case 3535:
case 1699:
case 3091:
case 1539:
case 2629:
case 415:
case 2679:
case 421:
case 3471:
case 1166:
case 3413:
case 2117:
case 3910:
case 2081:
case 1124:
case 2685:
case 3749:
case 3767:
case 3607:
case 4014:
case 1306:
case 2972:
case 562:
case 3245:
case 4005:
case 1312:
case 1308:
case 1597:
case 1637:
case 134:
case 1153:
case 2532:
case 599:
case 3281:
case 1797:
case 218:
case 2999:
case 3721:
case 3513:
case 1801:
case 1781:
case 3016:
case 589:
case 3467:
case 1445:
case 3018:
case 3297:
case 847:
case 3469:
case 842:
case 2143:
case 3482:
case 2501:
case 742:
case 3190:
case 747:
case 1472:
case 4037:
case 110:
case 2997:
case 2394:
case 3311:
case 3059:
case 1651:
case 1799:
case 934:
case 2455:
case 3595:
case 883:
case 3373:
case 3265:
case 1499:
case 313:
case 1247:
case 1269:
case 2386:
case 728:
case 4:
case 2755:
case 2099:
case 3857:
case 3222:
case 2555:
case 3272:
case 3916:
case 872:
case 3747:
case 3769:
case 1001:
case 1148:
case 1605:
case 1765:
case 2119:
case 1522:
case 752:
case 1146:
case 3782:
case 3818:
case 3957:
case 1614:
case 3802:
case 2231:
case 1300:
case 772:
case 1722:
case 3582:
case 852:
case 509:
case 2150:
case 3816:
case 1741:
case 3292:
case 614:
case 2353:
case 3935:
case 1:
case 1485:
case 1939:
case 1429:
case 3475:
case 2861:
case 2079:
case 2029:
case 921:
case 30:
case 915:
case 4001:
case 3241:
case 863:
case 1839:
case 2537:
case 879:
case 1851:
case 138:
case 2737:
case 1592:
case 763:
case 3657:
case 749:
case 726:
case 3170:
case 2374:
case 2207:
case 3285:
case 2927:
case 2092:
case 826:
case 2437:
case 3229:
case 3133:
case 3909:
case 1275:
case 1225:
case 1180:
case 1037:
case 410:
case 1814:
case 3602:
case 2106:
case 1441:
case 3525:
case 1579:
case 3393:
case 2108:
case 3616:
case 3575:
case 22:
case 1529:
case 3789:
case 2252:
case 2645:
case 1779:
case 3725:
case 3809:
case 3775:
case 3589:
case 62:
case 2360:
case 434:
case 3176:
case 2672:
case 520:
case 2714:
case 3542:
case 1727:
case 3587:
case 3807:
case 2665:
case 2829:
case 3787:
case 1577:
case 2061:
case 1461:
case 2514:
case 1039:
case 1350:
case 3277:
case 2439:
case 3227:
case 2451:
case 2209:
case 1242:
case 1655:
case 2346:
case 3315:
case 115:
case 230:
case 2551:
case 1837:
case 2539:
case 3261:
case 2414:
case 371:
case 1561:
case 2077:
case 553:
case 1477:
case 216:
case 1937:
case 0:
case 3442:
case 1601:
case 1432:
case 3344:
case 897:
case 1965:
case 4077:
case 1216:
case 2308:
case 1158:
case 720:
case 1097:
case 524:
case 3518:
case 430:
case 1679:
case 3869:
case 3021:
case 1629:
case 1865:
case 3675:
case 3516:
case 2545:
case 887:
case 2174:
case 2124:
case 1081:
case 2745:
case 1872:
case 1117:
case 3320:
case 3702:
case 1822:
case 1257:
case 3232:
case 2581:
case 2445:
case 3416:
case 3067:
case 1641:
case 3402:
case 3418:
case 2901:
case 2271:
case 2597:
case 2637:
case 2797:
case 1303:
case 2213:
case 2153:
case 769:
case 3457:
case 4061:
case 753:
case 2832:
case 3459:
case 4041:
case 3921:
case 42:
case 1455:
case 3971:
case 1134:
case 2799:
case 2383:
case 2599:
case 236:
case 3410:
case 3913:
case 3431:
case 1065:
case 807:
case 1661:
case 4092:
case 3082:
case 2295:
case 1997:
case 702:
case 210:
case 1072:
case 707:
case 3813:
case 2472:
case 1881:
case 1501:
case 2422:
case 2146:
case 2522:
case 3115:
case 2572:
case 3642:
case 3255:
case 3687:
case 2148:
case 2001:
case 1150:
case 2565:
case 3849:
case 3867:
case 1677:
case 3104:
case 2772:
case 1231:
case 3531:
case 1099:
case 3759:
case 3095:
case 4085:
case 3510:
case 1388:
case 2499:
case 3710:
case 1945:
case 3378:
case 3364:
case 3949:
case 3967:
case 2160:
case 414:
case 3731:
case 3376:
case 3559:
case 3326:
case 1969:
case 3965:
case 2859:
case 1982:
case 574:
case 66:
case 3158:
case 1757:
case 3922:
case 3218:
case 3202:
case 3097:
case 554:
case 2831:
case 2652:
case 1193:
case 3216:
case 26:
case 595:
case 2810:
case 3156:
case 1625:
case 1847:
case 2567:
case 2549:
case 2184:
case 1675:
case 1516:
case 866:
case 870:
case 2959:
case 2421:
case 3380:
case 1502:
case 1518:
case 788:
case 2471:
case 3117:
case 3872:
case 1702:
case 1718:
case 766:
case 2931:
case 1370:
case 3257:
case 888:
case 2607:
case 3685:
case 2910:
case 585:
case 1995:
case 840:
case 3999:
case 419:
case 2771:
case 2721:
case 1049:
case 1418:
case 1402:
case 2521:
case 2016:
case 2018:
case 2002:
case 2297:
case 1416:
case 117:
case 2449:
case 2467:
case 112:
case 3899:
case 3692:
case 3532:
case 2198:
case 2795:
case 2311:
case 1201:
case 1459:
case 1921:
case 2330:
case 1971:
case 3455:
case 2010:
case 546:
case 2373:
case 2031:
case 2323:
case 1410:
case 708:
case 1821:
case 3701:
case 1871:
case 1813:
case 3501:
case 3997:
case 917:
case 3394:
case 3072:
case 491:
case 2769:
case 2609:
case 1115:
case 2782:
case 3259:
case 3401:
case 1642:
case 639:
case 3119:
case 2582:
case 2818:
case 2957:
case 2802:
case 2354:
case 3231:
case 239:
case 864:
case 2816:
case 2569:
case 3210:
case 1510:
case 4062:
case 3755:
case 556:
case 1759:
case 1095:
case 3555:
case 1731:
case 1376:
case 576:
case 1559:
case 2222:
case 2902:
case 2857:
case 1326:
case 2918:
case 1328:
case 1710:
case 4025:
case 1935:
case 2407:
case 2398:
case 3939:
case 1007:
case 281:
case 1292:
case 2089:
case 971:
case 2613:
case 3541:
case 2025:
case 2671:
case 2075:
case 951:
case 2237:
case 3429:
case 1475:
case 3479:
case 1425:
case 829:
case 681:
case 1835:
case 137:
case 3839:
case 291:
case 10:
case 2136:
case 691:
case 338:
case 2138:
case 3289:
case 27:
case 98:
case 3914:
case 1657:
case 3492:
case 1120:
case 65:
case 2942:
case 3037:
case 3275:
case 25:
case 1279:
case 1393:
case 2667:
case 2707:
case 3785:
case 1575:
case 99:
case 1789:
case 3356:
case 3358:
case 1762:
case 1618:
case 4059:
case 1562:
case 1144:
case 1809:
case 3585:
case 3805:
case 1775:
case 860:
case 3727:
case 1807:
case 795:
case 1178:
case 19:
case 141:
case 633:
case 1126:
case 754:
case 1542:
case 601:
case 2682:
case 3291:
case 3186:
case 1742:
case 774:
case 3527:
case 233:
case 3188:
case 3577:
case 2669:
case 2709:
case 1610:
case 2435:
case 219:
case 1277:
case 1304:
case 1907:
case 3039:
case 2214:
case 566:
case 2154:
case 3242:
case 4002:
case 3655:
case 550:
case 1315:
case 885:
case 3051:
case 3319:
case 3287:
case 4016:
case 932:
case 321:
case 1261:
case 3837:
case 3343:
case 2535:
case 2173:
case 2123:
case 844:
case 171:
case 1442:
case 744:
case 3005:
case 46:
case 1009:
case 3601:
case 2130:
case 3937:
case 2042:
case 1421:
case 1959:
case 2518:
case 2502:
case 2675:
case 3545:
case 2625:
case 2071:
case 2013:
case 2716:
case 3124:
case 2689:
case 939:
case 1749:
case 3166:
case 596:
case 2370:
case 2320:
case 3481:
case 3140:
case 2557:
case 1859:
case 913:
case 2947:
case 2969:
case 3249:
case 2193:
case 1245:
case 1652:
case 3312:
case 16:
case 586:
case 1831:
case 3901:
case 3637:
case 441:
case 2895:
case 1198:
case 3797:
case 3213:
case 1196:
case 48:
case 800:
case 1721:
case 617:
case 1513:
case 1336:
case 2232:
case 1771:
case 612:
case 3801:
case 4035:
case 1338:
case 2995:
case 212:
case 3445:
case 1018:
case 217:
case 2416:
case 2418:
case 2049:
case 2067:
case 2871:
case 2047:
case 2069:
case 2821:
case 3932:
case 1299:
case 1447:
case 1469:
case 3422:
case 3472:
case 3832:
case 2921:
case 2201:
case 1059:
case 1323:
case 1635:
case 3639:
case 1031:
case 2431:
case 2913:
case 584:
case 2531:
case 2691:
case 827:
case 113:
case 822:
case 1495:
case 2949:
case 2967:
case 2710:
case 2559:
case 1857:
case 2326:
case 790:
case 3160:
case 727:
case 3572:
case 432:
case 2255:
case 2642:
case 3522:
case 3146:
case 1782:
case 594:
case 3001:
case 1609:
case 858:
case 555:
case 3765:
case 3605:
case 2867:
case 1547:
case 575:
case 3565:
case 1816:
case 780:
case 3614:
case 3772:
case 3300:
case 1582:
case 2241:
case 20:
case 14:
case 232:
case 745:
case 2835:
case 60:
case 3737:
case 548:
case 637:
case 1089:
case 1613:
case 2007:
case 3085:
case 2292:
case 181:
case 1398:
case 1407:
case 706:
case 314:
case 2475:
case 1671:
case 1025:
case 522:
case 2618:
case 2762:
case 2602:
case 32:
case 3827:
case 3645:
case 3252:
case 2525:
case 3877:
case 1667:
case 3041:
case 1887:
case 2589:
case 2725:
case 933:
case 1991:
case 1842:
case 855:
case 3366:
case 3927:
case 4047:
case 3092:
case 3324:
case 3977:
case 919:
case 1752:
case 17:
case 3374:
case 1384:
case 461:
case 1987:
case 755:
case 1891:
case 1942:
case 2035:
case 1214:
case 2591:
case 2304:
case 28:
case 2227:
case 2852:
case 1435:
case 2610:
case 97:
case 2277:
case 1989:
case 119:
case 1925:
case 1205:
case 3979:
case 3348:
case 4049:
case 4067:
case 95:
case 2659:
case 3346:
case 68:
case 417:
case 2315:
case 2791:
case 3714:
case 3672:
case 2176:
case 2164:
case 3885:
case 2952:
case 2178:
case 1509:
case 868:
case 1889:
case 565:
case 2587:
case 641:
case 1709:
case 3061:
case 1647:
case 133:
case 1875:
case 2742:
case 1682:
case 3027:
case 316:
case 1239:
case 651:
case 1042:
case 704:
case 1111:
case 3183:
case 671:
case 1130:
case 2442:
case 3941:
case 3892:
case 1735:
case 94:
case 3739:
case 1695:
case 3539:
case 4013:
case 2261:
case 2020:
case 396:
case 1973:
case 2698:
case 909:
case 2536:
case 1470:
case 2313:
case 2371:
case 1911:
case 167:
case 3006:
case 3663:
case 162:
case 3141:
case 469:
case 2044:
case 1830:
case 453:
case 3332:
case 3883:
case 3503:
case 368:
case 3185:
case 1544:
case 199:
case 1189:
case 2828:
case 3617:
case 1162:
case 716:
case 1357:
case 443:
case 3900:
case 3220:
case 1280:
case 497:
case 3179:
case 1125:
case 816:
case 2684:
case 1175:
case 2349:
case 1533:
case 2152:
case 2978:
case 2964:
case 1316:
case 189:
case 2208:
case 2206:
case 730:
case 1318:
case 1720:
case 2926:
case 1854:
case 3658:
case 3580:
case 3800:
case 1770:
case 1520:
case 3780:
case 1570:
case 61:
case 2436:
case 487:
case 1733:
case 2438:
case 3244:
case 830:
case 279:
case 3278:
case 989:
case 3228:
case 3912:
case 3494:
case 345:
case 659:
case 2754:
case 3276:
case 2382:
case 679:
case 259:
case 1288:
case 2833:
case 814:
case 3588:
case 1728:
case 3127:
case 3808:
case 3812:
case 3177:
case 3806:
case 2200:
case 1023:
case 306:
case 1726:
case 1615:
case 2430:
case 714:
case 1526:
case 1011:
case 3619:
case 3083:
case 3788:
case 4093:
case 1187:
case 2933:
case 1478:
case 2076:
case 1428:
case 2026:
case 72:
case 1426:
case 2690:
case 2064:
case 111:
case 1476:
case 2730:
case 82:
case 2523:
case 226:
case 3794:
case 2135:
case 249:
case 1054:
case 2454:
case 109:
case 355:
case 626:
case 2283:
case 1838:
case 394:
case 1644:
case 602:
case 2240:
case 3517:
case 3846:
case 449:
case 3717:
case 1258:
case 202:
case 2167:
case 3293:
case 147:
case 1325:
case 4078:
case 836:
case 183:
case 3329:
case 4076:
case 3558:
case 2915:
case 4026:
case 2266:
case 1620:
case 1362:
case 1098:
case 1670:
case 1217:
case 2307:
case 3385:
case 2224:
case 1793:
case 1096:
case 2274:
case 2268:
case 3040:
case 2638:
case 2596:
case 2636:
case 3341:
case 931:
case 390:
case 3456:
case 1493:
case 327:
case 2484:
case 3563:
case 479:
case 2171:
case 2121:
case 2253:
case 459:
case 2113:
case 3417:
case 3392:
case 3603:
case 3066:
case 3763:
case 172:
case 358:
case 3743:
case 957:
case 952:
case 2611:
case 687:
case 3419:
case 682:
case 2630:
case 1996:
case 3543:
case 282:
case 1998:
case 2335:
case 2623:
case 3734:
case 243:
case 1243:
case 697:
case 692:
case 620:
case 3853:
case 643:
case 365:
case 131:
case 3060:
case 3694:
case 3534:
case 983:
case 1219:
case 3155:
case 1342:
case 734:
case 669:
case 2246:
case 653:
case 516:
case 2654:
case 834:
case 269:
case 3924:
case 253:
case 3327:
case 3974:
case 3968:
case 2893:
case 3377:
case 1884:
case 3550:
case 2169:
case 1391:
case 1715:
case 4020:
case 3940:
case 4070:
case 3686:
case 3866:
case 1515:
case 1676:
case 530:
case 424:
case 300:
case 1626:
case 3750:
case 1628:
case 947:
case 3874:
case 2993:
case 1664:
case 2873:
case 2823:
case 2444:
case 2811:
case 3238:
case 667:
case 2420:
case 3653:
case 1696:
case 1536:
case 1538:
case 949:
case 1698:
case 1070:
case 1321:
case 4090:
case 1033:
case 2930:
case 1736:
case 2770:
case 1926:
case 2720:
case 2318:
case 3345:
case 1208:
case 2316:
case 11:
case 1349:
case 1367:
case 1964:
case 979:
case 1152:
case 3988:
case 2733:
case 959:
case 2038:
case 815:
case 2520:
case 518:
case 689:
case 1876:
case 3706:
case 2162:
case 1826:
case 3712:
case 1107:
case 1878:
case 344:
case 3888:
case 431:
case 3508:
case 2125:
case 2744:
case 1920:
case 2726:
case 2073:
case 428:
case 2331:
case 3254:
case 1473:
case 329:
case 346:
case 8:
case 1933:
case 3648:
case 2564:
case 2187:
case 1411:
case 2528:
case 2011:
case 2142:
case 2359:
case 1430:
case 452:
case 1820:
case 3372:
case 457:
case 3094:
case 3660:
case 4084:
case 535:
case 1369:
case 163:
case 472:
case 3880:
case 2286:
case 3500:
case 209:
case 1135:
case 3273:
case 3139:
case 126:
case 3151:
case 609:
case 2838:
case 2836:
case 1078:
case 1690:
case 1530:
case 225:
case 1511:
case 1723:
case 360:
case 1026:
case 2478:
case 1076:
case 3086:
case 1523:
case 1711:
case 625:
case 3399:
case 611:
case 3919:
case 283:
case 411:
case 2633:
case 2325:
case 425:
case 3950:
case 2389:
case 1498:
case 953:
case 2096:
case 2793:
case 1904:
case 969:
case 2670:
case 2098:
case 1496:
case 3540:
case 2217:
case 2620:
case 2362:
case 683:
case 3453:
case 1266:
case 1784:
case 3574:
case 3568:
case 409:
case 2644:
case 3724:
case 1584:
case 2116:
case 3608:
case 3768:
case 13:
case 1149:
case 1167:
case 242:
case 1352:
case 735:
case 2258:
case 102:
case 3606:
case 2102:
case 693:
case 1121:
case 677:
case 257:
case 364:
case 3474:
case 277:
case 3424:
case 1113:
case 3296:
case 1253:
case 3466:
case 1596:
case 4023:
case 1638:
case 3943:
case 228:
case 4011:
case 2493:
case 1798:
case 997:
case 3197:
case 2263:
case 628:
case 3753:
case 3056:
case 1093:
case 2990:
case 203:
case 398:
case 631:
case 192:
case 2898:
case 120:
case 2896:
case 3446:
case 1590:
case 489:
case 2415:
case 3683:
case 1611:
case 3019:
case 388:
case 1015:
case 187:
case 4038:
case 366:
case 1623:
case 1673:
case 1790:
case 4036:
case 3050:
case 2715:
case 3043:
case 323:
case 1169:
case 1147:
case 3748:
case 3548:
case 818:
case 521:
case 2090:
case 2664:
case 340:
case 515:
case 2628:
case 2515:
case 3546:
case 1490:
case 3122:
case 462:
case 2159:
case 3034:
case 467:
case 3560:
case 2219:
case 2387:
case 2984:
case 1248:
case 1893:
case 2250:
case 3856:
case 3858:
case 3917:
case 1654:
case 3760:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746442801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,];
var gg_b = "1746442801/";

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
