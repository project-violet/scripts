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
case 3018:
case 849:
case 3654:
case 1123:
case 856:
case 1446:
case 2482:
case 3925:
case 3759:
case 2625:
case 2721:
case 2683:
case 2920:
case 2705:
case 1749:
case 2572:
case 2085:
case 3823:
case 2361:
case 3318:
case 3377:
case 1468:
case 1152:
case 545:
case 3267:
case 3734:
case 595:
case 357:
case 2686:
case 460:
case 1815:
case 2346:
case 1300:
case 261:
case 332:
case 2404:
case 1824:
case 3638:
case 1317:
case 2242:
case 547:
case 2644:
case 839:
case 413:
case 861:
case 1174:
case 3068:
case 1172:
case 964:
case 3960:
case 272:
case 2516:
case 1603:
case 3810:
case 512:
case 2340:
case 2180:
case 1032:
case 1729:
case 3851:
case 3694:
case 623:
case 1637:
case 1313:
case 2913:
case 1399:
case 3468:
case 2802:
case 1643:
case 2381:
case 137:
case 3741:
case 662:
case 1991:
case 2033:
case 1856:
case 264:
case 2163:
case 981:
case 2179:
case 3163:
case 2092:
case 2197:
case 3682:
case 3939:
case 432:
case 1256:
case 3995:
case 3744:
case 1773:
case 2413:
case 2871:
case 1679:
case 3417:
case 1638:
case 3965:
case 2866:
case 3332:
case 480:
case 2972:
case 3801:
case 1140:
case 276:
case 1632:
case 2899:
case 3662:
case 3737:
case 3592:
case 10:
case 299:
case 943:
case 1444:
case 2862:
case 3918:
case 3407:
case 1975:
case 1612:
case 1781:
case 3511:
case 3225:
case 251:
case 527:
case 2698:
case 2759:
case 827:
case 445:
case 7:
case 3232:
case 3405:
case 2838:
case 783:
case 2890:
case 2799:
case 1407:
case 1441:
case 918:
case 3968:
case 2567:
case 2469:
case 3545:
case 745:
case 4032:
case 2609:
case 12:
case 3141:
case 3311:
case 3170:
case 722:
case 2353:
case 3553:
case 2810:
case 3706:
case 3097:
case 2641:
case 466:
case 1896:
case 70:
case 1130:
case 2116:
case 2809:
case 2982:
case 3263:
case 2470:
case 842:
case 2454:
case 74:
case 2296:
case 3788:
case 563:
case 3421:
case 1589:
case 1723:
case 1381:
case 1237:
case 767:
case 128:
case 2961:
case 3532:
case 1540:
case 3959:
case 1082:
case 88:
case 2673:
case 3310:
case 2427:
case 2425:
case 572:
case 3069:
case 609:
case 3125:
case 2484:
case 245:
case 3471:
case 1878:
case 2360:
case 179:
case 873:
case 1809:
case 2615:
case 1213:
case 254:
case 1879:
case 643:
case 967:
case 1548:
case 1872:
case 389:
case 135:
case 1131:
case 744:
case 3938:
case 3996:
case 2504:
case 348:
case 411:
case 2371:
case 1370:
case 283:
case 3108:
case 1748:
case 2198:
case 2403:
case 2257:
case 4013:
case 3137:
case 4038:
case 1717:
case 993:
case 2718:
case 3049:
case 706:
case 542:
case 769:
case 1046:
case 2976:
case 1455:
case 1755:
case 1803:
case 3644:
case 1480:
case 14:
case 3517:
case 3151:
case 1982:
case 142:
case 1023:
case 382:
case 1714:
case 766:
case 2439:
case 103:
case 3114:
case 2379:
case 2541:
case 246:
case 370:
case 795:
case 463:
case 84:
case 1499:
case 3087:
case 1708:
case 329:
case 576:
case 3699:
case 977:
case 669:
case 1526:
case 2522:
case 4042:
case 2927:
case 1959:
case 4049:
case 3899:
case 1832:
case 3850:
case 1923:
case 4094:
case 675:
case 3779:
case 548:
case 3775:
case 2946:
case 73:
case 3905:
case 116:
case 3633:
case 1744:
case 1645:
case 570:
case 2488:
case 588:
case 1067:
case 2190:
case 2830:
case 2833:
case 845:
case 2732:
case 3904:
case 1492:
case 1593:
case 3993:
case 651:
case 819:
case 27:
case 2453:
case 1947:
case 1573:
case 2880:
case 4089:
case 2803:
case 3209:
case 837:
case 1353:
case 3690:
case 1462:
case 3659:
case 1364:
case 1228:
case 4070:
case 812:
case 524:
case 3798:
case 1524:
case 3865:
case 2831:
case 3335:
case 3765:
case 81:
case 3936:
case 724:
case 1628:
case 1911:
case 869:
case 42:
case 2962:
case 1970:
case 1761:
case 3472:
case 3725:
case 2241:
case 3767:
case 2714:
case 1390:
case 3025:
case 1270:
case 3448:
case 3518:
case 4058:
case 2709:
case 1429:
case 4092:
case 2599:
case 2767:
case 1161:
case 734:
case 2232:
case 3807:
case 3443:
case 866:
case 2461:
case 775:
case 1825:
case 1553:
case 194:
case 291:
case 984:
case 668:
case 39:
case 4051:
case 811:
case 2390:
case 3046:
case 1535:
case 462:
case 3958:
case 2426:
case 1129:
case 883:
case 333:
case 1617:
case 3021:
case 2150:
case 1454:
case 2932:
case 2974:
case 1202:
case 172:
case 1059:
case 686:
case 1225:
case 3536:
case 3693:
case 591:
case 1335:
case 34:
case 2637:
case 3171:
case 3903:
case 243:
case 4095:
case 2188:
case 3753:
case 2682:
case 924:
case 2873:
case 2922:
case 920:
case 1594:
case 879:
case 2745:
case 3477:
case 2028:
case 2282:
case 1314:
case 3081:
case 237:
case 3569:
case 1498:
case 974:
case 815:
case 2996:
case 3181:
case 1369:
case 748:
case 147:
case 4085:
case 2680:
case 1818:
case 634:
case 18:
case 3601:
case 2843:
case 3149:
case 2428:
case 3242:
case 2797:
case 4075:
case 2706:
case 3013:
case 4037:
case 2832:
case 1937:
case 3462:
case 1318:
case 1520:
case 2607:
case 3189:
case 1431:
case 682:
case 2520:
case 1938:
case 1026:
case 713:
case 1701:
case 1621:
case 28:
case 3525:
case 3730:
case 3124:
case 1843:
case 2814:
case 3353:
case 1101:
case 507:
case 2964:
case 2321:
case 1782:
case 3136:
case 1091:
case 579:
case 2255:
case 2652:
case 3500:
case 2204:
case 2503:
case 2601:
case 1373:
case 2511:
case 2990:
case 3177:
case 2382:
case 3315:
case 1328:
case 1025:
case 2059:
case 3406:
case 2690:
case 2155:
case 3777:
case 585:
case 3037:
case 1847:
case 1297:
case 273:
case 697:
case 594:
case 3197:
case 3193:
case 1585:
case 2573:
case 1291:
case 2408:
case 3111:
case 3828:
case 3076:
case 362:
case 1533:
case 3660:
case 2280:
case 2806:
case 3195:
case 388:
case 4033:
case 3546:
case 3446:
case 2595:
case 1121:
case 3440:
case 702:
case 1382:
case 2473:
case 2292:
case 871:
case 2181:
case 1142:
case 1985:
case 3736:
case 392:
case 3942:
case 77:
case 2643:
case 1125:
case 2939:
case 2529:
case 40:
case 2277:
case 2320:
case 2329:
case 3666:
case 703:
case 1461:
case 3436:
case 3235:
case 3349:
case 1199:
case 1154:
case 173:
case 4024:
case 3159:
case 2072:
case 1683:
case 3059:
case 854:
case 1711:
case 130:
case 3501:
case 1538:
case 2107:
case 1884:
case 3035:
case 1514:
case 3491:
case 1329:
case 2566:
case 1549:
case 410:
case 2840:
case 3556:
case 1706:
case 1166:
case 770:
case 908:
case 3678:
case 3486:
case 3095:
case 3528:
case 948:
case 3632:
case 2679:
case 498:
case 3646:
case 3414:
case 573:
case 3283:
case 3295:
case 1821:
case 284:
case 3008:
case 3006:
case 652:
case 3547:
case 789:
case 1047:
case 1577:
case 62:
case 3879:
case 4028:
case 4019:
case 1910:
case 281:
case 1618:
case 3424:
case 105:
case 931:
case 3797:
case 531:
case 178:
case 941:
case 3949:
case 2061:
case 2909:
case 3614:
case 3504:
case 2193:
case 2089:
case 2429:
case 1496:
case 196:
case 20:
case 1264:
case 3869:
case 3671:
case 1908:
case 2315:
case 3028:
case 2869:
case 3507:
case 596:
case 1106:
case 3285:
case 1002:
case 2570:
case 1936:
case 2355:
case 100:
case 1035:
case 3922:
case 2258:
case 1251:
case 3165:
case 3812:
case 1420:
case 1806:
case 2853:
case 1443:
case 3376:
case 2225:
case 441:
case 8:
case 3063:
case 1795:
case 3228:
case 2430:
case 1449:
case 2649:
case 3016:
case 1922:
case 342:
case 914:
case 1235:
case 1915:
case 1820:
case 3843:
case 3701:
case 868:
case 1569:
case 2215:
case 1089:
case 3423:
case 2986:
case 2827:
case 1822:
case 2434:
case 2548:
case 3648:
case 3067:
case 4060:
case 3881:
case 728:
case 2741:
case 2665:
case 805:
case 367:
case 561:
case 1357:
case 3458:
case 1930:
case 2032:
case 2055:
case 104:
case 2970:
case 3530:
case 4034:
case 1863:
case 4063:
case 2126:
case 1403:
case 4084:
case 2000:
case 2878:
case 2394:
case 2309:
case 3574:
case 3893:
case 3847:
case 2956:
case 2561:
case 2501:
case 2166:
case 1579:
case 4026:
case 199:
case 1669:
case 2244:
case 3735:
case 163:
case 1149:
case 3862:
case 3256:
case 3604:
case 1705:
case 1298:
case 772:
case 3110:
case 361:
case 558:
case 1686:
case 902:
case 262:
case 477:
case 183:
case 4091:
case 2554:
case 2689:
case 3001:
case 3127:
case 2807:
case 3830:
case 2852:
case 1198:
case 3962:
case 2101:
case 3902:
case 1513:
case 3609:
case 2207:
case 1366:
case 3139:
case 3817:
case 3010:
case 2981:
case 2568:
case 618:
case 3892:
case 1359:
case 3740:
case 2524:
case 1952:
case 4067:
case 720:
case 3878:
case 1541:
case 390:
case 1308:
case 2936:
case 256:
case 671:
case 1972:
case 2510:
case 2694:
case 1654:
case 3483:
case 1003:
case 2079:
case 1343:
case 1810:
case 1473:
case 2506:
case 2330:
case 4073:
case 2298:
case 3787:
case 3858:
case 3950:
case 3554:
case 852:
case 1799:
case 1108:
case 385:
case 1600:
case 625:
case 1995:
case 3146:
case 68:
case 1110:
case 97:
case 1433:
case 2904:
case 760:
case 1124:
case 664:
case 928:
case 2629:
case 3487:
case 800:
case 1368:
case 3098:
case 1740:
case 2125:
case 2248:
case 3757:
case 192:
case 115:
case 2323:
case 901:
case 1713:
case 99:
case 2064:
case 1439:
case 2740:
case 2110:
case 1136:
case 2113:
case 1112:
case 3390:
case 1363:
case 3585:
case 729:
case 442:
case 2372:
case 2758:
case 1725:
case 386:
case 3860:
case 51:
case 1827:
case 3845:
case 3814:
case 809:
case 3981:
case 3894:
case 2354:
case 1544:
case 1500:
case 3104:
case 3901:
case 2486:
case 3344:
case 2786:
case 1691:
case 2916:
case 3380:
case 1927:
case 3776:
case 2386:
case 4079:
case 1236:
case 1258:
case 3784:
case 3147:
case 2057:
case 1916:
case 1647:
case 2556:
case 584:
case 3871:
case 1165:
case 2672:
case 2638:
case 278:
case 3329:
case 3338:
case 3371:
case 1290:
case 696:
case 3307:
case 2839:
case 2464:
case 3339:
case 2183:
case 3854:
case 4003:
case 3217:
case 1796:
case 3004:
case 592:
case 3716:
case 2602:
case 556:
case 552:
case 997:
case 1184:
case 1132:
case 2411:
case 1977:
case 1614:
case 114:
case 903:
case 785:
case 958:
case 64:
case 290:
case 1571:
case 1135:
case 227:
case 1635:
case 414:
case 3650:
case 487:
case 2817:
case 375:
case 779:
case 1463:
case 1039:
case 2975:
case 2178:
case 1331:
case 846:
case 1024:
case 26:
case 940:
case 1874:
case 1994:
case 1068:
case 2307:
case 2120:
case 1245:
case 2318:
case 1476:
case 1623:
case 1736:
case 4059:
case 3752:
case 3057:
case 3859:
case 796:
case 1241:
case 2921:
case 956:
case 2013:
case 1143:
case 1072:
case 740:
case 3549:
case 1170:
case 1333:
case 2450:
case 1128:
case 3400:
case 2851:
case 3600:
case 2086:
case 3821:
case 1397:
case 1805:
case 1555:
case 1097:
case 220:
case 774:
case 1616:
case 2300:
case 613:
case 600:
case 2539:
case 929:
case 2094:
case 951:
case 277:
case 719:
case 2077:
case 353:
case 962:
case 60:
case 315:
case 1302:
case 3051:
case 540:
case 509:
case 1119:
case 352:
case 3870:
case 566:
case 4040:
case 739:
case 1469:
case 1194:
case 2670:
case 4039:
case 2053:
case 1914:
case 2695:
case 933:
case 3106:
case 3277:
case 3805:
case 3743:
case 756:
case 1950:
case 1889:
case 2588:
case 3698:
case 1567:
case 850:
case 419:
case 2624:
case 1139:
case 152:
case 1855:
case 1829:
case 239:
case 559:
case 21:
case 624:
case 2752:
case 3503:
case 2661:
case 3257:
case 356:
case 3771:
case 1071:
case 473:
case 2343:
case 870:
case 1502:
case 1042:
case 3509:
case 593:
case 1070:
case 1961:
case 2001:
case 1851:
case 1396:
case 1418:
case 2481:
case 3337:
case 790:
case 408:
case 2784:
case 3286:
case 2532:
case 3957:
case 3761:
case 2861:
case 1657:
case 1054:
case 3676:
case 335:
case 1043:
case 814:
case 2191:
case 2928:
case 860:
case 1379:
case 1086:
case 195:
case 2367:
case 1940:
case 446:
case 3047:
case 2042:
case 1156:
case 4065:
case 31:
case 144:
case 1530:
case 1694:
case 190:
case 2194:
case 3598:
case 1409:
case 730:
case 3168:
case 1631:
case 521:
case 354:
case 934:
case 3368:
case 1001:
case 217:
case 987:
case 2139:
case 3813:
case 823:
case 2669:
case 91:
case 3186:
case 186:
case 707:
case 2514:
case 1401:
case 1315:
case 1426:
case 221:
case 3625:
case 3026:
case 3537:
case 2093:
case 3052:
case 151:
case 788:
case 2333:
case 853:
case 905:
case 373:
case 820:
case 3251:
case 1138:
case 3214:
case 3042:
case 2462:
case 637:
case 582:
case 2356:
case 2335:
case 3078:
case 1065:
case 3219:
case 3979:
case 319:
case 1586:
case 1189:
case 698:
case 1525:
case 3132:
case 4036:
case 3815:
case 1114:
case 3180:
case 932:
case 2134:
case 1671:
case 528:
case 2418:
case 709:
case 3529:
case 3782:
case 3374:
case 2774:
case 1667:
case 1360:
case 1075:
case 716:
case 3416:
case 3804:
case 2208:
case 1958:
case 3306:
case 372:
case 1022:
case 945:
case 1372:
case 1004:
case 704:
case 3672:
case 1839:
case 773:
case 2790:
case 2537:
case 606:
case 440:
case 2213:
case 3829:
case 3581:
case 2106:
case 3096:
case 1293:
case 2545:
case 3637:
case 1690:
case 321:
case 1859:
case 2262:
case 4082:
case 2041:
case 2907:
case 517:
case 2114:
case 180:
case 1731:
case 121:
case 1185:
case 3493:
case 2538:
case 3480:
case 3583:
case 3953:
case 3584:
case 3346:
case 1220:
case 1852:
case 3128:
case 4030:
case 718:
case 2202:
case 443:
case 3154:
case 236:
case 1218:
case 2239:
case 0:
case 2216:
case 2930:
case 3571:
case 603:
case 2651:
case 1279:
case 140:
case 2383:
case 233:
case 1416:
case 3166:
case 749:
case 2229:
case 2966:
case 3827:
case 622:
case 3450:
case 3626:
case 3062:
case 203:
case 1162:
case 1012:
case 2037:
case 4074:
case 2030:
case 1268:
case 2245:
case 1662:
case 334:
case 1797:
case 2738:
case 1819:
case 418:
case 3384:
case 3253:
case 896:
case 53:
case 626:
case 3429:
case 791:
case 598:
case 1254:
case 886:
case 1212:
case 3541:
case 345:
case 1117:
case 1099:
case 1226:
case 93:
case 3567:
case 786:
case 922:
case 3623:
case 1946:
case 2620:
case 4015:
case 3356:
case 3538:
case 2604:
case 1204:
case 117:
case 3073:
case 1835:
case 3117:
case 1506:
case 3896:
case 2002:
case 1880:
case 3562:
case 807:
case 3494:
case 2937:
case 2753:
case 2159:
case 124:
case 3763:
case 1187:
case 4010:
case 2578:
case 3492:
case 3647:
case 3764:
case 3297:
case 1649:
case 2733:
case 3857:
case 2948:
case 639:
case 793:
case 2385:
case 3387:
case 1159:
case 1988:
case 2478:
case 4056:
case 3897:
case 98:
case 1183:
case 3045:
case 661:
case 2:
case 205:
case 1088:
case 2432:
case 3394:
case 1405:
case 2444:
case 2696:
case 1394:
case 1321:
case 885:
case 3055:
case 764:
case 48:
case 1052:
case 549:
case 804:
case 762:
case 66:
case 52:
case 3983:
case 619:
case 3218:
case 1670:
case 4011:
case 781:
case 320:
case 2099:
case 2558:
case 1319:
case 3849:
case 3413:
case 3738:
case 2472:
case 2455:
case 134:
case 1263:
case 3478:
case 2985:
case 3579:
case 1699:
case 2783:
case 1505:
case 1289:
case 1924:
case 1107:
case 32:
case 3915:
case 1978:
case 3005:
case 2275:
case 3058:
case 1330:
case 3811:
case 2596:
case 2781:
case 2316:
case 3933:
case 90:
case 1642:
case 145:
case 131:
case 3497:
case 1296:
case 3802:
case 4080:
case 3898:
case 658:
case 3890:
case 581:
case 3190:
case 313:
case 2440:
case 1760:
case 949:
case 3590:
case 890:
case 3185:
case 3948:
case 612:
case 89:
case 479:
case 160:
case 1051:
case 482:
case 2203:
case 2594:
case 1017:
case 2029:
case 1179:
case 1049:
case 3683:
case 2162:
case 1925:
case 387:
case 1862:
case 303:
case 1224:
case 1963:
case 71:
case 3863:
case 1964:
case 1016:
case 2301:
case 1512:
case 1849:
case 2542:
case 991:
case 2054:
case 1193:
case 2370:
case 3729:
case 1115:
case 1951:
case 2854:
case 966:
case 891:
case 1073:
case 1674:
case 2142:
case 3945:
case 921:
case 2260:
case 714:
case 2693:
case 3126:
case 2185:
case 3555:
case 2199:
case 1305:
case 3664:
case 3705:
case 112:
case 2527:
case 2508:
case 164:
case 25:
case 2231:
case 3304:
case 3888:
case 240:
case 476:
case 437:
case 191:
case 2025:
case 61:
case 1164:
case 562:
case 1346:
case 953:
case 1210:
case 3375:
case 1356:
case 1877:
case 971:
case 3641:
case 1787:
case 2463:
case 3034:
case 1816:
case 3331:
case 459:
case 1559:
case 338:
case 2410:
case 2963:
case 3367:
case 3773:
case 2068:
case 3118:
case 3431:
case 1408:
case 3914:
case 2968:
case 2965:
case 2117:
case 4012:
case 76:
case 113:
case 1284:
case 3294:
case 1893:
case 3336:
case 475:
case 2867:
case 567:
case 508:
case 1122:
case 1080:
case 3138:
case 1665:
case 2299:
case 167:
case 3167:
case 780:
case 1811:
case 2591:
case 3908:
case 1477:
case 1948:
case 1247:
case 3415:
case 3194:
case 659:
case 880:
case 3883:
case 990:
case 3913:
case 2045:
case 1712:
case 3086:
case 2681:
case 2801:
case 2317:
case 1345:
case 2167:
case 1250:
case 746:
case 1349:
case 253:
case 3451:
case 1741:
case 1598:
case 3017:
case 1168:
case 2284:
case 2378:
case 3580:
case 57:
case 3396:
case 3685:
case 1804:
case 2731:
case 3470:
case 422:
case 656:
case 1471:
case 157:
case 3:
case 4076:
case 3379:
case 3702:
case 2004:
case 2552:
case 3365:
case 1457:
case 2952:
case 2502:
case 2769:
case 1587:
case 1151:
case 2844:
case 1098:
case 2060:
case 2622:
case 2917:
case 957:
case 351:
case 2156:
case 2145:
case 667:
case 1239:
case 1871:
case 2422:
case 817:
case 3454:
case 1074:
case 2826:
case 3273:
case 1630:
case 2446:
case 3308:
case 2091:
case 1448:
case 2785:
case 2565:
case 2261:
case 4023:
case 1040:
case 1531:
case 1495:
case 2177:
case 1887:
case 3109:
case 452:
case 2083:
case 3490:
case 3891:
case 544:
case 1215:
case 1227:
case 3816:
case 2980:
case 4057:
case 2704:
case 444:
case 3552:
case 3649:
case 2528:
case 621:
case 1400:
case 1430:
case 1285:
case 2460:
case 274:
case 2140:
case 2342:
case 328:
case 653:
case 3791:
case 2887:
case 2888:
case 3077:
case 1336:
case 1299:
case 2240:
case 2886:
case 2384:
case 3211:
case 1786:
case 394:
case 3951:
case 1230:
case 1391:
case 2498:
case 1094:
case 3658:
case 1608:
case 3105:
case 4029:
case 2779:
case 1684:
case 1050:
case 1062:
case 919:
case 680:
case 3520:
case 282:
case 641:
case 1000:
case 1063:
case 2611:
case 1817:
case 2210:
case 1881:
case 2765:
case 2339:
case 3192:
case 501:
case 82:
case 1412:
case 2757:
case 1014:
case 3603:
case 2587:
case 2399:
case 2666:
case 4072:
case 1417:
case 4087:
case 580:
case 1933:
case 3351:
case 2088:
case 1697:
case 2906:
case 3019:
case 2130:
case 3213:
case 513:
case 416:
case 107:
case 828:
case 3133:
case 2195:
case 2393:
case 2044:
case 3630:
case 3563:
case 2642:
case 2247:
case 231:
case 1271:
case 3656:
case 3709:
case 973:
case 2233:
case 3409:
case 2924:
case 797:
case 1932:
case 2071:
case 1066:
case 723:
case 2530:
case 2820:
case 3408:
case 2289:
case 1920:
case 1971:
case 2366:
case 2268:
case 468:
case 3172:
case 2553:
case 3831:
case 2038:
case 2860:
case 1919:
case 2973:
case 3667:
case 2639:
case 753:
case 2671:
case 257:
case 3208:
case 875:
case 494:
case 833:
case 1008:
case 1188:
case 1746:
case 2135:
case 3739:
case 1754:
case 3162:
case 1634:
case 2748:
case 1987:
case 899:
case 3885:
case 434:
case 2896:
case 3651:
case 1411:
case 1027:
case 1504:
case 3359:
case 295:
case 226:
case 2764:
case 1560:
case 946:
case 3852:
case 2026:
case 4017:
case 3573:
case 3499:
case 3675:
case 2100:
case 755:
case 2365:
case 1447:
case 1823:
case 1973:
case 235:
case 67:
case 690:
case 3931:
case 1581:
case 3856:
case 4008:
case 1351:
case 6:
case 2274:
case 3887:
case 449:
case 3357:
case 2043:
case 884:
case 2994:
case 1259:
case 1501:
case 1575:
case 2380:
case 1807:
case 1840:
case 1253:
case 3502:
case 2171:
case 292:
case 3107:
case 3988:
case 2076:
case 2616:
case 3254:
case 3140:
case 259:
case 1785:
case 3438:
case 1111:
case 2243:
case 1689:
case 3522:
case 2209:
case 223:
case 2901:
case 1640:
case 1229:
case 1596:
case 1775:
case 119:
case 1272:
case 3516:
case 3655:
case 1561:
case 1192:
case 1519:
case 360:
case 3389:
case 3631:
case 1482:
case 1715:
case 1414:
case 2133:
case 3999:
case 129:
case 2845:
case 1778:
case 1967:
case 2743:
case 2220:
case 536:
case 2712:
case 376:
case 1493:
case 3179:
case 207:
case 3123:
case 1522:
case 3305:
case 657:
case 2868:
case 1752:
case 2352:
case 907:
case 2535:
case 355:
case 2525:
case 1753:
case 3392:
case 1015:
case 15:
case 1996:
case 2062:
case 1180:
case 2056:
case 4022:
case 3900:
case 2631:
case 3039:
case 485:
case 3749:
case 1854:
case 3985:
case 308:
case 721:
case 1885:
case 3465:
case 2954:
case 85:
case 1866:
case 673:
case 3756:
case 2574:
case 4027:
case 1011:
case 166:
case 1794:
case 3576:
case 258:
case 1550:
case 1661:
case 364:
case 311:
case 2407:
case 3889:
case 1273:
case 1989:
case 1287:
case 139:
case 947:
case 2579:
case 2373:
case 2677:
case 3591:
case 1993:
case 3245:
case 1494:
case 2222:
case 3785:
case 3204:
case 2940:
case 2414:
case 942:
case 1641:
case 1491:
case 1037:
case 1385:
case 3679:
case 3155:
case 2941:
case 1186:
case 286:
case 3564:
case 270:
case 640:
case 1903:
case 3615:
case 4078:
case 1709:
case 80:
case 683:
case 2782:
case 1942:
case 1084:
case 455:
case 1853:
case 1018:
case 1181:
case 2153:
case 2700:
case 1406:
case 2598:
case 2750:
case 2621:
case 58:
case 3876:
case 1537:
case 768:
case 3523:
case 2655:
case 420:
case 1929:
case 2847:
case 1133:
case 3766:
case 1093:
case 214:
case 2518:
case 279:
case 1474:
case 1081:
case 876:
case 3200:
case 1010:
case 1316:
case 2623:
case 2951:
case 550:
case 2304:
case 2357:
case 3652:
case 3669:
case 3020:
case 1376:
case 293:
case 3320:
case 1374:
case 1627:
case 3402:
case 3708:
case 3661:
case 3824:
case 834:
case 2172:
case 3506:
case 3594:
case 2412:
case 72:
case 2169:
case 726:
case 1838:
case 2882:
case 3977:
case 2052:
case 864:
case 1676:
case 3103:
case 171:
case 2103:
case 2585:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1668495601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,];
var gg_b = "1668495601/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
