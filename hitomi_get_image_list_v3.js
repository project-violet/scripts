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
case 2659:
case 1592:
case 833:
case 4078:
case 2591:
case 3039:
case 21:
case 300:
case 1218:
case 3887:
case 2769:
case 1154:
case 1400:
case 3595:
case 1010:
case 3482:
case 2984:
case 165:
case 3798:
case 1054:
case 4008:
case 1110:
case 628:
case 4049:
case 3674:
case 399:
case 1470:
case 93:
case 1147:
case 2563:
case 1968:
case 3355:
case 128:
case 2103:
case 356:
case 1819:
case 3488:
case 926:
case 2993:
case 3306:
case 2073:
case 3830:
case 3720:
case 1033:
case 2714:
case 2145:
case 1212:
case 2351:
case 676:
case 2786:
case 448:
case 3896:
case 2289:
case 281:
case 2045:
case 858:
case 1623:
case 1881:
case 3965:
case 3041:
case 2003:
case 991:
case 506:
case 2809:
case 3368:
case 2928:
case 187:
case 1523:
case 624:
case 868:
case 272:
case 1113:
case 283:
case 1473:
case 2202:
case 974:
case 993:
case 495:
case 2957:
case 709:
case 2879:
case 3847:
case 585:
case 3235:
case 655:
case 1226:
case 3064:
case 436:
case 1445:
case 2367:
case 1839:
case 719:
case 3958:
case 3442:
case 1403:
case 2399:
case 1774:
case 3810:
case 2272:
case 790:
case 2734:
case 1013:
case 375:
case 2936:
case 2170:
case 2753:
case 854:
case 3574:
case 2085:
case 1620:
case 3277:
case 1096:
case 2249:
case 3479:
case 550:
case 2746:
case 444:
case 680:
case 1921:
case 3424:
case 2663:
case 2922:
case 3529:
case 3081:
case 42:
case 1841:
case 2100:
case 831:
case 343:
case 825:
case 2278:
case 3207:
case 1238:
case 557:
case 3695:
case 3723:
case 2070:
case 4066:
case 542:
case 1955:
case 722:
case 3739:
case 3829:
case 1937:
case 1541:
case 116:
case 3236:
case 795:
case 2097:
case 409:
case 1446:
case 3949:
case 2977:
case 185:
case 3198:
case 3222:
case 884:
case 1389:
case 3874:
case 3978:
case 1754:
case 642:
case 3098:
case 539:
case 2312:
case 3460:
case 2907:
case 490:
case 377:
case 2859:
case 3290:
case 1664:
case 587:
case 657:
case 736:
case 2197:
case 3804:
case 238:
case 3192:
case 3340:
case 54:
case 72:
case 2404:
case 820:
case 3696:
case 2150:
case 3902:
case 4065:
case 253:
case 3554:
case 2548:
case 606:
case 157:
case 2509:
case 1980:
case 3459:
case 1956:
case 2014:
case 524:
case 3120:
case 2935:
case 2524:
case 3510:
case 1095:
case 2227:
case 422:
case 2745:
case 2114:
case 2703:
case 3972:
case 3741:
case 827:
case 3244:
case 1539:
case 2579:
case 555:
case 1434:
case 3610:
case 1174:
case 576:
case 202:
case 3463:
case 2624:
case 3530:
case 1519:
case 904:
case 234:
case 160:
case 4058:
case 1414:
case 1129:
case 1486:
case 1787:
case 1104:
case 1581:
case 2609:
case 1994:
case 3491:
case 167:
case 888:
case 305:
case 1713:
case 3596:
case 263:
case 2785:
case 3633:
case 2053:
case 4052:
case 3123:
case 1299:
case 2046:
case 1497:
case 1372:
case 2371:
case 3513:
case 2326:
case 2700:
case 3284:
case 1564:
case 2891:
case 3216:
case 1917:
case 3719:
case 229:
case 1641:
case 3343:
case 1302:
case 2642:
case 528:
case 1940:
case 748:
case 3023:
case 1730:
case 221:
case 235:
case 905:
case 4048:
case 860:
case 4009:
case 1997:
case 2889:
case 1969:
case 3466:
case 2282:
case 1107:
case 3138:
case 314:
case 1359:
case 1716:
case 986:
case 1007:
case 3038:
case 867:
case 2658:
case 296:
case 1812:
case 1440:
case 2811:
case 413:
case 1177:
case 558:
case 688:
case 3132:
case 2288:
case 2005:
case 3622:
case 3963:
case 1793:
case 3516:
case 3411:
case 3126:
case 2080:
case 3636:
case 3489:
case 1986:
case 1567:
case 1818:
case 1035:
case 2143:
case 1950:
case 1264:
case 2075:
case 3584:
case 3690:
case 2180:
case 2762:
case 1761:
case 771:
case 3071:
case 3032:
case 2866:
case 2652:
case 1651:
case 184:
case 1015:
case 3807:
case 308:
case 59:
case 1405:
case 1667:
case 2878:
case 3402:
case 1443:
case 1699:
case 977:
case 773:
case 2552:
case 782:
case 794:
case 3233:
case 1757:
case 1456:
case 3012:
case 3877:
case 2435:
case 3369:
case 2929:
case 2808:
case 3112:
case 2974:
case 1744:
case 48:
case 3472:
case 1115:
case 3397:
case 3536:
case 2242:
case 970:
case 318:
case 3616:
case 1525:
case 3431:
case 1934:
case 3408:
case 2140:
case 1437:
case 1736:
case 2558:
case 3544:
case 2279:
case 3247:
case 2183:
case 447:
case 3693:
case 525:
case 9:
case 2477:
case 3835:
case 3018:
case 2776:
case 1391:
case 1722:
case 2117:
case 1832:
case 3210:
case 2872:
case 3478:
case 850:
case 2248:
case 3254:
case 223:
case 2320:
case 3960:
case 2209:
case 127:
case 554:
case 684:
case 1363:
case 2083:
case 2802:
case 75:
case 3118:
case 1801:
case 2737:
case 2827:
case 2436:
case 975:
case 1612:
case 839:
case 1777:
case 494:
case 3979:
case 1476:
case 2422:
case 1116:
case 3924:
case 625:
case 631:
case 3535:
case 1526:
case 1084:
case 3615:
case 887:
case 2910:
case 3844:
case 168:
case 2858:
case 393:
case 78:
case 374:
case 3909:
case 3828:
case 1406:
case 3738:
case 1388:
case 654:
case 2490:
case 1223:
case 584:
case 592:
case 3199:
case 2689:
case 2428:
case 1851:
case 752:
case 2666:
case 2852:
case 2743:
case 855:
case 1973:
case 3701:
case 2578:
case 4091:
case 3204:
case 1618:
case 3507:
case 747:
case 2259:
case 2780:
case 2933:
case 2756:
case 1735:
case 1382:
case 3300:
case 45:
case 3229:
case 3726:
case 1945:
case 3427:
case 3771:
case 824:
case 1903:
case 3274:
case 2549:
case 3385:
case 520:
case 46:
case 910:
case 1715:
case 1028:
case 3988:
case 1309:
case 2649:
case 237:
case 3677:
case 2493:
case 588:
case 1057:
case 133:
case 2987:
case 917:
case 876:
case 1157:
case 3295:
case 1324:
case 3607:
case 230:
case 164:
case 2794:
case 1379:
case 2291:
case 1044:
case 1128:
case 2678:
case 1867:
case 1985:
case 1190:
case 1036:
case 2155:
case 3025:
case 2341:
case 1601:
case 4060:
case 2602:
case 1900:
case 2021:
case 828:
case 3982:
case 1632:
case 2631:
case 2416:
case 471:
case 1122:
case 2511:
case 2672:
case 1512:
case 349:
case 326:
case 1136:
case 1970:
case 2740:
case 3125:
case 2930:
case 1468:
case 3331:
case 1633:
case 2918:
case 3796:
case 3497:
case 3372:
case 1966:
case 1587:
case 3564:
case 1781:
case 3892:
case 2782:
case 2498:
case 1216:
case 1719:
case 3917:
case 1343:
case 759:
case 2060:
case 3641:
case 1305:
case 686:
case 556:
case 4021:
case 2814:
case 3730:
case 796:
case 115:
case 1463:
case 430:
case 2307:
case 3519:
case 1647:
case 2420:
case 2059:
case 1911:
case 3639:
case 507:
case 3787:
case 26:
case 2897:
case 2159:
case 3029:
case 2262:
case 3581:
case 1764:
case 541:
case 804:
case 437:
case 3994:
case 1491:
case 735:
case 3713:
case 105:
case 3308:
case 2869:
case 1654:
case 1383:
case 25:
case 2063:
case 3905:
case 3943:
case 2901:
case 543:
case 1554:
case 1257:
case 3195:
case 3980:
case 3733:
case 1459:
case 1120:
case 2846:
case 1630:
case 3095:
case 3975:
case 920:
case 1741:
case 1972:
case 3539:
case 1244:
case 2163:
case 350:
case 3619:
case 3453:
case 1739:
case 769:
case 2503:
case 3541:
case 2276:
case 3225:
case 1394:
case 1949:
case 2724:
case 1222:
case 1198:
case 4068:
case 566:
case 808:
case 1874:
case 3710:
case 3389:
case 3754:
case 2748:
case 1613:
case 1098:
case 1460:
case 2709:
case 818:
case 1290:
case 306:
case 992:
case 984:
case 2315:
case 1687:
case 1804:
case 4017:
case 2845:
case 2614:
case 2237:
case 423:
case 3620:
case 355:
case 2534:
case 3130:
case 3365:
case 2925:
case 1479:
case 240:
case 1362:
case 675:
case 3921:
case 2082:
case 1081:
case 3841:
case 2803:
case 143:
case 1952:
case 1448:
case 1504:
case 1207:
case 324:
case 1181:
case 1409:
case 3692:
case 211:
case 1723:
case 1695:
case 252:
case 2650:
case 3196:
case 2873:
case 34:
case 3955:
case 1368:
case 3523:
case 2088:
case 2205:
case 3113:
case 1854:
case 2669:
case 3473:
case 2697:
case 3704:
case 3201:
case 2243:
case 1164:
case 2256:
case 2280:
case 2759:
case 1847:
case 968:
case 3087:
case 1064:
case 3226:
case 166:
case 3729:
case 3839:
case 1927:
case 3774:
case 1442:
case 0:
case 2553:
case 3271:
case 3232:
case 2546:
case 175:
case 3698:
case 607:
case 1141:
case 3819:
case 4075:
case 1306:
case 1720:
case 3598:
case 610:
case 3033:
case 891:
case 2653:
case 3212:
case 1896:
case 600:
case 641:
case 4005:
case 3133:
case 3962:
case 3795:
case 2885:
case 1321:
case 2464:
case 1965:
case 3881:
case 1792:
case 617:
case 4056:
case 459:
case 2800:
case 4080:
case 3485:
case 1039:
case 730:
case 3592:
case 141:
case 964:
case 3047:
case 505:
case 1604:
case 2967:
case 496:
case 3400:
case 3154:
case 213:
case 1595:
case 2109:
case 117:
case 2481:
case 1482:
case 1798:
case 435:
case 3520:
case 737:
case 933:
case 4037:
case 3054:
case 656:
case 2009:
case 3110:
case 2514:
case 1674:
case 2240:
case 1139:
case 789:
case 3470:
case 2179:
case 2283:
case 515:
case 3968:
case 3985:
case 3190:
case 1861:
case 2862:
case 2656:
case 2680:
case 429:
case 1718:
case 3342:
case 2499:
case 1345:
case 2605:
case 446:
case 2766:
case 1151:
case 2152:
case 3900:
case 781:
case 1982:
case 2333:
case 4053:
case 3122:
case 2052:
case 149:
case 1373:
case 63:
case 1515:
case 3626:
case 2675:
case 358:
case 3970:
case 126:
case 1125:
case 1635:
case 3468:
case 649:
case 3028:
case 532:
case 3715:
case 2158:
case 2583:
case 976:
case 2517:
case 451:
case 2711:
case 4034:
case 2127:
case 504:
case 2354:
case 333:
case 2789:
case 2286:
case 3157:
case 2027:
case 2964:
case 3462:
case 807:
case 1884:
case 3638:
case 2347:
case 3044:
case 3292:
case 3128:
case 2058:
case 3867:
case 71:
case 4050:
case 2330:
case 94:
case 4086:
case 2702:
case 1204:
case 354:
case 1507:
case 1890:
case 3161:
case 3735:
case 3382:
case 2683:
case 2876:
case 3193:
case 1229:
case 1300:
case 1726:
case 1942:
case 955:
case 3903:
case 1771:
case 2065:
case 843:
case 1577:
case 461:
case 2617:
case 1385:
case 2821:
case 4014:
case 518:
case 2313:
case 3612:
case 3571:
case 1099:
case 3532:
case 3777:
case 1067:
case 980:
case 3526:
case 1615:
case 3084:
case 368:
case 1452:
case 3016:
case 1948:
case 193:
case 2451:
case 1167:
case 3184:
case 3707:
case 174:
case 2694:
case 3406:
case 1909:
case 1828:
case 508:
case 4069:
case 1199:
case 2505:
case 987:
case 3455:
case 3736:
case 3953:
case 3437:
case 950:
case 3826:
case 1449:
case 1018:
case 1725:
case 1693:
case 1350:
case 618:
case 3871:
case 753:
case 2805:
case 1254:
case 4085:
case 1557:
case 608:
case 3363:
case 4000:
case 2856:
case 1661:
case 942:
case 2880:
case 1528:
case 3790:
case 1118:
case 2843:
case 1684:
case 384:
case 108:
case 3667:
case 2401:
case 1402:
case 3443:
case 593:
case 870:
case 574:
case 2506:
case 1012:
case 1877:
case 2089:
case 2521:
case 985:
case 2245:
case 2727:
case 1112:
case 3475:
case 1369:
case 2111:
case 1397:
case 2758:
case 3115:
case 3744:
case 2471:
case 877:
case 2203:
case 1536:
case 3525:
case 2576:
case 916:
case 295:
case 1171:
case 2172:
case 2131:
case 481:
case 2568:
case 2621:
case 3793:
case 1516:
case 2676:
case 1001:
case 4003:
case 2920:
case 3914:
case 1411:
case 2412:
case 632:
case 1636:
case 3986:
case 2655:
case 1287:
case 2102:
case 3950:
case 1101:
case 1584:
case 3264:
case 3761:
case 3494:
case 1991:
case 1346:
case 2992:
case 1071:
case 614:
case 1032:
case 3651:
case 2008:
case 886:
case 1296:
case 763:
case 3077:
case 2049:
case 1799:
case 712:
case 2200:
case 815:
case 2329:
case 114:
case 3281:
case 1561:
case 40:
case 1138:
case 3107:
case 1628:
case 3219:
case 3417:
case 1593:
case 104:
case 960:
case 1815:
case 279:
case 388:
case 2270:
case 578:
case 3440:
case 2108:
case 53:
case 3812:
case 2149:
case 1230:
case 764:
case 3591:
case 3659:
case 2887:
case 488:
case 1999:
case 930:
case 31:
case 1148:
case 1586:
case 1024:
case 3769:
case 1550:
case 162:
case 3984:
case 1481:
case 217:
case 103:
case 1124:
case 1419:
case 1048:
case 3888:
case 2674:
case 1514:
case 1009:
case 937:
case 598:
case 2629:
case 1328:
case 989:
case 1283:
case 210:
case 30:
case 3563:
case 2141:
case 3103:
case 256:
case 4035:
case 758:
case 2215:
case 603:
case 2830:
case 3073:
case 1646:
case 1653:
case 3351:
case 3211:
case 1870:
case 3714:
case 3145:
case 3173:
case 3786:
case 2896:
case 1464:
case 2321:
case 3660:
case 1042:
case 1294:
case 3003:
case 2376:
case 662:
case 3413:
case 613:
case 819:
case 647:
case 3928:
case 1669:
case 372:
case 79:
case 18:
case 1697:
case 3560:
case 3957:
case 1316:
case 2235:
case 4015:
case 3879:
case 484:
case 640:
case 1384:
case 3367:
case 2442:
case 809:
case 3944:
case 1441:
case 3824:
case 275:
case 3231:
case 2574:
case 3085:
case 3936:
case 1845:
case 101:
case 2479:
case 3746:
case 725:
case 3447:
case 2119:
case 2424:
case 2362:
case 3922:
case 1803:
case 2529:
case 1082:
case 2504:
case 3278:
case 2448:
case 2019:
case 2952:
case 243:
case 1951:
case 3454:
case 1393:
case 3691:
case 2181:
case 3559:
case 1760:
case 3990:
case 3185:
case 2695:
case 3070:
case 2833:
case 55:
case 1686:
case 152:
case 3542:
case 2236:
case 2739:
case 4016:
case 2908:
case 270:
case 2394:
case 1276:
case 1221:
case 836:
case 1724:
case 645:
case 1834:
case 3688:
case 49:
case 1545:
case 3169:
case 2613:
case 182:
case 173:
case 3907:
case 277:
case 1423:
case 2804:
case 338:
case 792:
case 1255:
case 1315:
case 3860:
case 1191:
case 3682:
case 552:
case 682:
case 1600:
case 2340:
case 15:
case 1063:
case 3548:
case 3404:
case 1901:
case 3773:
case 2459:
case 727:
case 923:
case 2257:
case 425:
case 2317:
case 547:
case 361:
case 2120:
case 3050:
case 1926:
case 3114:
case 1670:
case 501:
case 2092:
case 2244:
case 2:
case 4093:
case 3703:
case 1742:
case 2972:
case 3474:
case 2741:
case 1932:
case 2931:
case 454:
case 540:
case 1163:
case 198:
case 1788:
case 3624:
case 2530:
case 3134:
case 215:
case 302:
case 2293:
case 1420:
case 464:
case 2647:
case 3338:
case 334:
case 1912:
case 4028:
case 1500:
case 1897:
case 16:
case 3495:
case 671:
case 3265:
case 879:
case 1585:
case 2491:
case 351:
case 2654:
case 363:
case 1869:
case 3648:
case 2337:
case 3034:
case 3053:
case 171:
case 3332:
case 2633:
case 1886:
case 66:
case 3371:
case 2513:
case 1850:
case 458:
case 2587:
case 3700:
case 2375:
case 4090:
case 2966:
case 1782:
case 1160:
case 3891:
case 2781:
case 848:
case 2719:
case 4036:
case 2216:
case 2356:
case 1498:
case 3301:
case 1603:
case 3642:
case 329:
case 3770:
case 346:
case 1645:
case 2305:
case 3146:
case 3588:
case 963:
case 767:
case 1008:
case 3037:
case 2334:
case 335:
case 912:
case 465:
case 1374:
case 2799:
case 951:
case 1178:
case 2466:
case 476:
case 1200:
case 1894:
case 1078:
case 760:
case 1998:
case 3658:
case 179:
case 648:
case 1304:
case 2038:
case 1108:
case 3137:
case 3627:
case 1270:
case 902:
case 396:
case 2230:
case 3768:
case 1149:
case 86:
case 3415:
case 1172:
case 679:
case 2963:
case 3288:
case 3005:
case 1568:
case 1817:
case 946:
case 2001:
case 929:
case 1676:
case 1883:
case 2516:
case 871:
case 3175:
case 359:
case 1840:
case 2126:
case 2287:
case 3762:
case 3156:
case 3075:
case 2584:
case 2690:
case 1072:
case 2071:
case 1992:
case 1765:
case 2346:
case 2991:
case 3652:
case 2032:
case 4033:
case 3105:
case 938:
case 208:
case 97:
case 706:
case 480:
case 2684:
case 644:
case 2590:
case 3552:
case 1273:
case 3904:
case 4013:
case 2959:
case 1506:
case 1089:
case 1521:
case 1668:
case 3929:
case 3808:
case 2369:
case 1727:
case 519:
case 1245:
case 3094:
case 2536:
case 716:
case 369:
case 439:
case 2472:
case 2397:
case 1758:
case 2431:
case 1576:
case 882:
case 3558:
case 3140:
case 1875:
case 750:
case 3477:
case 2835:
case 2449:
case 3279:
case 424:
case 2247:
case 3183:
case 1066:
case 3831:
case 3721:
case 4030:
case 3872:
case 3527:
case 2350:
case 2210:
case 2254:
case 1166:
case 845:
case 2314:
case 323:
case 3017:
case 2751:
case 1805:
case 2478:
case 3706:
case 953:
case 3407:
case 757:
case 1438:
case 3665:
case 3209:
case 2557:
case 2528:
case 1880:
case 3040:
case 1662:
case 3802:
case 522:
case 12:
case 742:
case 1313:
case 1708:
case 3827:
case 1939:
case 3947:
case 1425:
case 1749:
case 1246:
case 88:
case 595:
case 2067:
case 3422:
case 3910:
case 1387:
case 2844:
case 119:
case 1575:
case 2615:
case 622:
case 1543:
case 293:
case 3954:
case 1451:
case 2948:
case 1778:
case 274:
case 2828:
case 1580:
case 1694:
case 3260:
case 2857:
case 1505:
case 3068:
case 1330:
case 609:
case 1165:
case 3428:
case 1806:
case 697:
case 122:
case 74:
case 2204:
case 3743:
case 2701:
case 3933:
case 3457:
case 3756:
case 3319:
case 2507:
case 3259:
case 2890:
case 3780:
case 801:
case 690:
case 3381:
case 852:
case 1876:
case 1683:
case 2726:
case 3775:
case 442:
case 2427:
case 2836:
case 1640:
case 2300:
case 3062:
case 2229:
case 2274:
case 3508:
case 1537:
case 3444:
case 1941:
case 2771:
case 2822:
case 755:
case 2385:
case 457:
case 2577:
case 776:
case 389:
case 23:
case 813:
case 2988:
case 3263:
case 4029:
case 1583:
case 862:
case 765:
case 3608:
case 1637:
case 579:
case 2712:
case 1250:
case 1310:
case 1789:
case 3461:
case 1964:
case 1027:
case 2295:
case 1058:
case 3291:
case 2884:
case 91:
case 330:
case 3678:
case 3339:
case 3913:
case 1594:
case 291:
case 2861:
case 3341:
case 3996:
case 1499:
case 2303:
case 3602:
case 3076:
case 2718:
case 3155:
case 1297:
case 1152:
case 3021:
case 1269:
case 2345:
case 1605:
case 3484:
case 3865:
case 2982:
case 3106:
case 1052:
case 1333:
case 3511:
case 3672:
case 548:
case 1675:
case 728:
case 2125:
case 371:
case 4051:
case 2331:
case 1785:
case 859:
case 2796:
case 1371:
case 2497:
case 449:
case 3673:
case 1046:
case 3918:
case 1700:
case 612:
case 663:
case 3782:
case 1891:
case 3160:
case 2564:
case 2917:
case 1642:
case 2302:
case 3060:
case 2641:
case 1770:
case 2940:
case 3814:
case 146:
case 634:
case 948:
case 1146:
case 2820:
case 3268:
case 1915:
case 629:
case 3570:
case 2898:
case 50:
case 3788:
case 102:
case 2004:
case 260:
case 1338:
case 2519:
case 2378:
case 3912:
case 2129:
case 2104:
case 2787:
case 36:
case 3500:
case 3897:
case 1495:
case 896:
case 1582:
case 2029:
case 3585:
case 2074:
case 3377:
case 151:
case 1609:
case 2349:
case 267:
case 3869:
case 2308:
case 1648:
case 51:
case 112:
case 2713:
case 1034:
case 1682:
case 92:
case 3063:
case 3600:
case 1548:
case 153:
case 2943:
case 1773:
case 67:
case 638:
case 1014:
case 2956:
case 2980:
case 1524:
case 1050:
case 3926:
case 1429:
case 3670:
case 2095:
case 2539:
case 1474:
case 3971:
case 1703:
case 3742:
case 2619:
case 1542:
case 216:
case 2453:
case 493:
case 474:
case 2747:
case 3779:
case 2446:
case 1097:
case 2225:
case 3221:
case 1069:
case 3724:
case 2710:
case 2389:
case 1312:
case 3573:
case 2251:
case 1169:
case 373:
case 394:
case 3206:
case 2664:
case 708:
case 17:
case 3255:
case 572:
case 1197:
case 653:
case 583:
case 1085:
case 3614:
case 1208:
case 1753:
case 3845:
case 2130:
case 1746:
case 2976:
case 1249:
case 255:
case 2620:
case 1663:
case 1000:
case 3361:
case 2921:
case 1410:
case 2841:
case 1842:
case 1278:
case 672:
case 1454:
case 683:
case 1100:
case 1691:
case 2906:
case 561:
case 2692:
case 3760:
case 2238:
case 2030:
case 352:
case 3650:
case 1809:
case 183:
case 3669:
case 1848:
case 3088:
case 57:
case 3205:
case 997:
case 3243:
case 2187:
case 418:
case 3697:
case 38:
case 239:
case 1433:
case 1957:
case 774:
case 3256:
case 919:
case 1879:
case 2729:
case 2839:
case 1367:
case 3275:
case 990:
case 1399:
case 2774:
case 3441:
case 1734:
case 2013:
case 2698:
case 4012:
case 2232:
case 3546:
case 1103:
case 3142:
case 228:
case 726:
case 3763:
case 4026:
case 2598:
case 4071:
case 1993:
case 1351:
case 1211:
case 529:
case 3653:
case 4032:
case 2033:
case 1289:
case 1750:
case 1173:
case 1487:
case 3322:
case 2962:
case 2795:
case 2623:
case 3885:
case 1045:
case 2133:
case 3042:
case 4001:
case 1003:
case 791:
case 3336:
case 3800:
case 1591:
case 551:
case 2592:
case 1659:
case 2358:
case 1797:
case 563:
case 2047:
case 404:
case 3148:
case 3586:
case 3024:
case 1769:
case 362:
case 2327:
case 1984:
case 889:
case 3109:
case 3419:
case 303:
case 2054:
case 534:
case 3357:
case 2520:
case 1888:
case 3514:
case 3009:
case 2470:
case 1563:
case 3179:
case 1430:
case 2147:
case 2036:
case 2190:
case 2985:
case 3862:
case 1155:
case 2022:
case 3152:
case 2900:
case 1021:
case 1865:
case 3981:
case 1106:
case 2122:
case 3052:
case 3919:
case 2632:
case 3333:
case 559:
case 1672:
case 1511:
case 689:
case 258:
case 2970:
case 2090:
case 2626:
case 3675:
case 756:
case 2468:
case 1783:
case 1055:
case 1176:
case 596:
case 2715:
case 189:
case 3540:
case 710:
case 3583:
case 1263:
case 81:
case 1493:
case 1649:
case 3868:
case 3637:
case 903:
case 1608:
case 3354:
case 799:
case 3711:
case 2057:
case 3127:
case 1566:
case 1461:
case 717:
case 913:
case 2157:
case 962:
case 3027:
case 535:
case 521:
case 2128:
case 3058:
case 1291:
case 130:
case 264:
case 1339:
case 2518:
case 700:
case 3806:
case 1852:
case 1666:
case 2851:
case 1705:
case 911:
case 322:
case 4092:
case 2618:
case 743:
case 3702:
case 1756:
case 254:
case 1319:
case 1259:
case 2161:
case 2382:
case 2825:
case 1381:
case 1775:
case 3640:
case 3065:
case 940:
case 1508:
case 2903:
case 1444:
case 3941:
case 3821:
case 3731:
case 901:
case 3313:
case 569:
case 3939:
case 1436:
case 3708:
case 2476:
case 2777:
case 1947:
case 3425:
case 477:
case 1168:
case 883:
case 872:
case 2116:
case 2421:
case 1364:
case 1858:
case 3387:
case 1910:
case 2084:
case 3575:
case 3543:
case 2501:
case 3778:
case 1954:
case 1260:
case 397:
case 2184:
case 309:
case 2388:
case 29:
case 2455:
case 3505:
case 945:
case 1558:
case 2239:
case 4019:
case 443:
case 2953:
case 7:
case 2826:
case 1140:
case 2391:
case 2946:
case 1183:
case 220:
case 3066:
case 1224:
case 1721:
case 2832:
case 2722:
case 1117:
case 3395:
case 1872:
case 669:
case 2871:
case 1248:
case 3752:
case 1017:
case 3805:
case 3438:
case 1407:
case 1665:
case 1706:
case 1209:
case 1320:
case 2790:
case 3923:
case 3662:
case 3856:
case 1040:
case 95:
case 3843:
case 1802:
case 1083:
case 32:
case 284:
case 2728:
case 292:
case 336:
case 466:
case 623:
case 1552:
case 2699:
case 1904:
case 2443:
case 1398:
case 982:
case 838:
case 87:
case 1849:
case 1435:
case 3727:
case 2475:
case 1929:
case 3245:
case 2241:
case 3203:
case 1094:
case 1242:
case 2115:
case 3471:
case 3432:
case 395:
case 2525:
case 3576:
case 1005:
case 3131:
case 3568:
case 3002:
case 2135:
case 2360:
case 2793:
case 2625:
case 3883:
case 2914:
case 3840:
case 1056:
case 159:
case 1143:
case 3102:
case 2950:
case 2818:
case 2986:
case 1762:
case 2264:
case 1156:
case 3072:
case 2494:
case 829:
case 3765:
case 2651:
case 971:
case 2599:
case 3031:
case 1037:
case 3008:
case 530:
case 121:
case 499:
case 3374:
case 834:
case 407:
case 3418:
case 3049:
case 3200:
case 3329:
case 2969:
case 96:
case 2716:
case 4039:
case 3078:
case 2359:
case 379:
case 659:
case 1137:
case 2440:
case 715:
case 2483:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754985601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,];
var gg_b = "1754985601/";

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
