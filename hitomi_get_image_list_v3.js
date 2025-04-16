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
case 1566:
case 3234:
case 1871:
case 3752:
case 609:
case 32:
case 606:
case 3416:
case 947:
case 1463:
case 115:
case 3686:
case 1493:
case 1558:
case 1733:
case 1288:
case 3291:
case 4040:
case 3367:
case 329:
case 4095:
case 708:
case 60:
case 3048:
case 3230:
case 2097:
case 2075:
case 4065:
case 1372:
case 1643:
case 3261:
case 3103:
case 3991:
case 399:
case 165:
case 2880:
case 101:
case 2079:
case 4020:
case 881:
case 3961:
case 3334:
case 1865:
case 2413:
case 3892:
case 1840:
case 913:
case 2516:
case 481:
case 1820:
case 1388:
case 1157:
case 972:
case 3330:
case 209:
case 3267:
case 3391:
case 1844:
case 1272:
case 206:
case 3297:
case 407:
case 3275:
case 336:
case 3800:
case 963:
case 1824:
case 2948:
case 3967:
case 2183:
case 3997:
case 3975:
case 2228:
case 758:
case 65:
case 3135:
case 1132:
case 2597:
case 160:
case 314:
case 3121:
case 3153:
case 795:
case 349:
case 3528:
case 58:
case 1511:
case 3491:
case 3731:
case 659:
case 1508:
case 1488:
case 3916:
case 1101:
case 3641:
case 110:
case 364:
case 3764:
case 3621:
case 362:
case 1993:
case 589:
case 3639:
case 34:
case 1705:
case 1058:
case 2313:
case 735:
case 3674:
case 3475:
case 3127:
case 3647:
case 2668:
case 1107:
case 2782:
case 2913:
case 1363:
case 2698:
case 2016:
case 3627:
case 2656:
case 3743:
case 4088:
case 1224:
case 3879:
case 1944:
case 1152:
case 831:
case 2828:
case 3867:
case 793:
case 3159:
case 1244:
case 3875:
case 3897:
case 3200:
case 1703:
case 3084:
case 1965:
case 1977:
case 1995:
case 1299:
case 3655:
case 1652:
case 137:
case 2319:
case 491:
case 3633:
case 1265:
case 1277:
case 1295:
case 3659:
case 1999:
case 1324:
case 2280:
case 3473:
case 821:
case 2746:
case 3891:
case 54:
case 3830:
case 2980:
case 3300:
case 2136:
case 386:
case 3576:
case 2000:
case 514:
case 1971:
case 2284:
case 431:
case 197:
case 2919:
case 910:
case 127:
case 4072:
case 573:
case 2636:
case 2092:
case 3304:
case 1395:
case 3254:
case 1512:
case 3609:
case 174:
case 3732:
case 468:
case 3122:
case 1125:
case 539:
case 3519:
case 1131:
case 3142:
case 113:
case 1499:
case 1739:
case 1160:
case 1753:
case 1538:
case 1721:
case 1664:
case 3718:
case 3580:
case 1649:
case 3400:
case 3109:
case 3701:
case 3105:
case 1645:
case 3642:
case 163:
case 776:
case 1690:
case 779:
case 743:
case 2276:
case 4093:
case 1629:
case 1164:
case 1424:
case 818:
case 987:
case 526:
case 3816:
case 767:
case 2685:
case 915:
case 596:
case 1893:
case 1727:
case 1863:
case 2415:
case 2484:
case 2592:
case 868:
case 3350:
case 2050:
case 717:
case 1774:
case 3707:
case 2114:
case 3273:
case 278:
case 2480:
case 3076:
case 3607:
case 1674:
case 1147:
case 1170:
case 241:
case 878:
case 2681:
case 3472:
case 1737:
case 1497:
case 1475:
case 1850:
case 268:
case 537:
case 2714:
case 3107:
case 1647:
case 1174:
case 2296:
case 2063:
case 4073:
case 3363:
case 2958:
case 2181:
case 1854:
case 2966:
case 2789:
case 218:
case 2996:
case 3722:
case 1725:
case 1141:
case 2417:
case 3601:
case 597:
case 360:
case 1121:
case 146:
case 618:
case 1790:
case 3511:
case 1430:
case 527:
case 173:
case 351:
case 986:
case 1491:
case 1731:
case 3508:
case 641:
case 3293:
case 1916:
case 3263:
case 3632:
case 2396:
case 3709:
case 164:
case 310:
case 1621:
case 1764:
case 719:
case 1216:
case 1013:
case 14:
case 3963:
case 4050:
case 3705:
case 1702:
case 2146:
case 732:
case 2458:
case 1334:
case 1804:
case 1892:
case 3877:
case 2563:
case 2908:
case 3869:
case 563:
case 2126:
case 734:
case 3157:
case 2088:
case 631:
case 3272:
case 1297:
case 1361:
case 291:
case 3844:
case 136:
case 2911:
case 1967:
case 3972:
case 1997:
case 1279:
case 221:
case 2626:
case 2211:
case 3871:
case 4000:
case 2308:
case 3566:
case 1752:
case 3008:
case 3755:
case 722:
case 691:
case 3123:
case 19:
case 3463:
case 3493:
case 3558:
case 1686:
case 3288:
case 547:
case 2072:
case 1103:
case 1397:
case 3651:
case 1991:
case 3623:
case 199:
case 1186:
case 3011:
case 2798:
case 1354:
case 1816:
case 347:
case 3770:
case 2768:
case 3747:
case 501:
case 3893:
case 3727:
case 3137:
case 3863:
case 2412:
case 2577:
case 2595:
case 1350:
case 929:
case 2524:
case 2182:
case 926:
case 1707:
case 3774:
case 859:
case 3637:
case 996:
case 3149:
case 1254:
case 1404:
case 1492:
case 3735:
case 3477:
case 3465:
case 1122:
case 3125:
case 2858:
case 1142:
case 3145:
case 257:
case 1954:
case 3131:
case 456:
case 1605:
case 2866:
case 2571:
case 313:
case 3129:
case 3420:
case 2896:
case 3469:
case 3721:
case 3664:
case 1109:
case 1580:
case 3625:
case 1373:
case 3631:
case 3690:
case 363:
case 3629:
case 3424:
case 2678:
case 2024:
case 2817:
case 3324:
case 914:
case 946:
case 1891:
case 1830:
case 186:
case 1300:
case 1861:
case 3344:
case 949:
case 1576:
case 973:
case 560:
case 3971:
case 3369:
case 2020:
case 2212:
case 784:
case 3888:
case 3399:
case 80:
case 1362:
case 3365:
case 2065:
case 4075:
case 327:
case 2912:
case 2783:
case 1392:
case 2238:
case 3377:
case 3224:
case 1743:
case 1879:
case 3944:
case 3924:
case 1133:
case 1867:
case 3872:
case 40:
case 1897:
case 1875:
case 1159:
case 1751:
case 3703:
case 2312:
case 3220:
case 3965:
case 3012:
case 3269:
case 1992:
case 3995:
case 4061:
case 1019:
case 3371:
case 3786:
case 1659:
case 4091:
case 1454:
case 3154:
case 2310:
case 4018:
case 1225:
case 3010:
case 1290:
case 1231:
case 3874:
case 1807:
case 1245:
case 3922:
case 1260:
case 2676:
case 3150:
case 737:
case 3905:
case 3654:
case 1902:
case 1964:
case 455:
case 2314:
case 3793:
case 3827:
case 4001:
case 1452:
case 3847:
case 1294:
case 2389:
case 1264:
case 2898:
case 3536:
case 498:
case 3089:
case 855:
case 1349:
case 828:
case 2022:
case 1937:
case 519:
case 2210:
case 1345:
case 3673:
case 940:
case 958:
case 1331:
case 1390:
case 925:
case 2042:
case 133:
case 1801:
case 1237:
case 2796:
case 3309:
case 1818:
case 2214:
case 51:
case 569:
case 3173:
case 1394:
case 797:
case 1302:
case 2914:
case 384:
case 4007:
case 3835:
case 1364:
case 461:
case 3933:
case 1620:
case 1582:
case 3255:
case 4023:
case 1699:
case 448:
case 3233:
case 2806:
case 4043:
case 774:
case 3589:
case 1640:
case 3409:
case 1695:
case 3259:
case 1952:
case 3604:
case 1460:
case 763:
case 411:
case 1429:
case 1120:
case 534:
case 1791:
case 3442:
case 930:
case 179:
case 143:
case 1165:
case 1449:
case 532:
case 3192:
case 1644:
case 1177:
case 2717:
case 3104:
case 2489:
case 2684:
case 3355:
case 3886:
case 2055:
case 2033:
case 167:
case 3333:
case 3359:
case 3803:
case 2236:
case 2059:
case 2115:
case 3772:
case 1437:
case 1797:
case 524:
case 1779:
case 271:
case 2119:
case 908:
case 1171:
case 1843:
case 990:
case 522:
case 1578:
case 392:
case 3953:
case 2070:
case 3486:
case 4060:
case 715:
case 3506:
case 2368:
case 1693:
case 3347:
case 3370:
case 4031:
case 1754:
case 324:
case 2398:
case 3235:
case 1663:
case 3241:
case 3939:
case 4025:
case 3583:
case 967:
case 2356:
case 4049:
case 2814:
case 2885:
case 3935:
case 1932:
case 1546:
case 1193:
case 3374:
case 985:
case 4094:
case 1163:
case 1750:
case 1201:
case 1423:
case 108:
case 3116:
case 602:
case 1081:
case 1443:
case 917:
case 1526:
case 1894:
case 2298:
case 97:
case 1332:
case 2503:
case 334:
case 2035:
case 3970:
case 202:
case 2053:
case 3321:
case 2968:
case 2021:
case 3947:
case 3353:
case 332:
case 3809:
case 2039:
case 1457:
case 1890:
case 803:
case 3274:
case 976:
case 3842:
case 943:
case 1301:
case 1849:
case 1907:
case 1825:
case 1087:
case 369:
case 31:
case 1951:
case 1243:
case 751:
case 3724:
case 933:
case 652:
case 584:
case 1251:
case 1700:
case 760:
case 1943:
case 1188:
case 1357:
case 1026:
case 980:
case 319:
case 2306:
case 3439:
case 3568:
case 3006:
case 2570:
case 3634:
case 3769:
case 3453:
case 3598:
case 3720:
case 316:
case 3435:
case 1792:
case 3777:
case 3740:
case 2527:
case 3556:
case 710:
case 1688:
case 3765:
case 853:
case 993:
case 1343:
case 3697:
case 1351:
case 135:
case 923:
case 2628:
case 1257:
case 3679:
case 2983:
case 2206:
case 2541:
case 2712:
case 3303:
case 3175:
case 2738:
case 252:
case 2468:
case 3447:
case 2128:
case 3470:
case 1852:
case 852:
case 2612:
case 520:
case 992:
case 3352:
case 1355:
case 2052:
case 1886:
case 367:
case 922:
case 1333:
case 2638:
case 1803:
case 854:
case 994:
case 508:
case 385:
case 1772:
case 3823:
case 3797:
case 3775:
case 2112:
case 2748:
case 3767:
case 3171:
case 2728:
case 2138:
case 3669:
case 3582:
case 3734:
case 3494:
case 3402:
case 1959:
case 3665:
case 1233:
case 1662:
case 1788:
case 653:
case 1100:
case 1589:
case 3640:
case 1604:
case 1036:
case 3144:
case 3460:
case 3624:
case 3761:
case 2478:
case 1442:
case 1510:
case 3490:
case 3199:
case 3730:
case 3857:
case 3165:
case 1422:
case 454:
case 3425:
case 2846:
case 3449:
case 1192:
case 3349:
case 789:
case 2049:
case 969:
case 2887:
case 2090:
case 1342:
case 203:
case 1673:
case 333:
case 3360:
case 3329:
case 380:
case 2378:
case 3237:
case 4070:
case 2060:
case 3801:
case 78:
case 1309:
case 96:
case 942:
case 2552:
case 1839:
case 595:
case 944:
case 2713:
case 3302:
case 1173:
case 184:
case 4074:
case 558:
case 1841:
case 3364:
case 525:
case 3832:
case 288:
case 1650:
case 393:
case 3945:
case 1154:
case 2978:
case 4021:
case 3929:
case 3960:
case 4053:
case 3290:
case 4041:
case 323:
case 1242:
case 3807:
case 1874:
case 2037:
case 1922:
case 1763:
case 1150:
case 1209:
case 1905:
case 3902:
case 1793:
case 1827:
case 1085:
case 3452:
case 1455:
case 1847:
case 535:
case 1089:
case 3716:
case 2108:
case 871:
case 2501:
case 2481:
case 1675:
case 3343:
case 1697:
case 250:
case 3672:
case 2780:
case 248:
case 2023:
case 205:
case 3351:
case 2946:
case 2051:
case 335:
case 3323:
case 3587:
case 1474:
case 261:
case 3257:
case 1833:
case 2784:
case 3172:
case 1197:
case 593:
case 1175:
case 2715:
case 1303:
case 2518:
case 2111:
case 3852:
case 177:
case 2719:
case 523:
case 1470:
case 211:
case 3923:
case 395:
case 746:
case 11:
case 712:
case 169:
case 3046:
case 1661:
case 166:
case 749:
case 773:
case 3581:
case 4055:
case 325:
case 3251:
case 3700:
case 2326:
case 611:
case 2057:
case 3026:
case 16:
case 1799:
case 1130:
case 119:
case 762:
case 1634:
case 982:
case 3418:
case 1421:
case 1720:
case 648:
case 650:
case 1598:
case 1441:
case 1083:
case 3792:
case 605:
case 3432:
case 1795:
case 144:
case 764:
case 533:
case 1556:
case 661:
case 543:
case 2666:
case 1247:
case 3802:
case 1341:
case 1927:
case 576:
case 2032:
case 2696:
case 132:
case 2018:
case 1809:
case 57:
case 383:
case 1842:
case 1274:
case 3831:
case 3301:
case 200:
case 2878:
case 3829:
case 330:
case 3860:
case 2551:
case 228:
case 3907:
case 1974:
case 255:
case 2281:
case 2523:
case 2387:
case 2158:
case 3773:
case 3825:
case 698:
case 1506:
case 79:
case 192:
case 1486:
case 1370:
case 1068:
case 124:
case 1098:
case 3754:
case 1241:
case 585:
case 628:
case 72:
case 1616:
case 1253:
case 122:
case 1403:
case 3218:
case 1239:
case 1056:
case 517:
case 2882:
case 3193:
case 1374:
case 799:
case 3546:
case 3451:
case 4005:
case 3837:
case 3750:
case 729:
case 238:
case 3443:
case 3081:
case 2557:
case 4009:
case 390:
case 726:
case 2287:
case 567:
case 677:
case 843:
case 1326:
case 2744:
case 1617:
case 2661:
case 2724:
case 2691:
case 1346:
case 1507:
case 3:
case 21:
case 485:
case 3527:
case 2556:
case 87:
case 2740:
case 3383:
case 2083:
case 2986:
case 2598:
case 2161:
case 2203:
case 2006:
case 2634:
case 26:
case 2799:
case 1226:
case 2474:
case 3628:
case 644:
case 885:
case 1051:
case 105:
case 1926:
case 148:
case 2697:
case 2675:
case 642:
case 1481:
case 1501:
case 66:
case 619:
case 1108:
case 2179:
case 111:
case 277:
case 2386:
case 3906:
case 352:
case 1518:
case 443:
case 3712:
case 2175:
case 3541:
case 3003:
case 1784:
case 1532:
case 3535:
case 3148:
case 3456:
case 2833:
case 3885:
case 2935:
case 2941:
case 3027:
case 571:
case 294:
case 2583:
case 2253:
case 2616:
case 2241:
case 224:
case 2098:
case 2068:
case 4078:
case 2953:
case 2486:
case 3368:
case 2506:
case 2347:
case 1287:
case 632:
case 138:
case 1776:
case 1987:
case 493:
case 3613:
case 3039:
case 3406:
case 1658:
case 3998:
case 2947:
case 3021:
case 2353:
case 2970:
case 3053:
case 2321:
case 1032:
case 3503:
case 1696:
case 3956:
case 3483:
case 2341:
case 3298:
case 2805:
case 3268:
case 2247:
case 3113:
case 694:
case 1523:
case 4082:
case 128:
case 1551:
case 1001:
case 721:
case 1878:
case 2274:
case 1426:
case 1166:
case 2036:
case 2955:
case 3336:
case 2233:
case 435:
case 3883:
case 2192:
case 3717:
case 2104:
case 928:
case 895:
case 2422:
case 2162:
case 900:
case 1826:
case 2510:
case 1478:
case 504:
case 998:
case 840:
case 3059:
case 4046:
case 2333:
case 1594:
case 1482:
case 3619:
case 3505:
case 425:
case 1052:
case 440:
case 2355:
case 3684:
case 3509:
case 4026:
case 3180:
case 3489:
case 1529:
case 1560:
case 1590:
case 1728:
case 153:
case 1545:
case 3119:
case 1748:
case 3522:
case 3184:
case 835:
case 3115:
case 3680:
case 1549:
case 781:
case 820:
case 961:
case 1278:
case 684:
case 552:
case 845:
case 905:
case 890:
case 2010:
case 948:
case 3310:
case 2154:
case 1881:
case 2650:
case 2089:
case 3176:
case 3389:
case 3898:
case 3868:
case 2085:
case 2793:
case 3856:
case 2433:
case 1382:
case 2654:
case 2150:
case 2763:
case 707:
case 1060:
case 1378:
case 830:
case 1031:
case 883:
case 103:
case 2342:
case 2673:
case 3022:
case 1887:
case 3210:
case 2322:
case 2835:
case 3289:
case 1064:
case 284:
case 3559:
case 3533:
case 3005:
case 420:
case 1094:
case 2173:
case 2305:
case 1713:
case 408:
case 3285:
case 5:
case 3766:
case 2821:
case 3009:
case 2853:
case 3796:
case 3436:
case 2309:
case 1256:
case 1613:
case 1998:
case 690:
case 3658:
case 1021:
case 70:
case 4010:
case 608:
case 2318:
case 1053:
case 102:
case 884:
case 1956:
case 1503:
case 3032:
case 645:
case 3696:
case 1298:
case 620:
case 104:
case 2864:
case 2894:
case 3666:
case 2087:
case 2773:
case 3446:
case 3387:
case 2907:
case 4014:
case 709:
case 3551:
case 328:
case 2829:
case 2301:
case 300:
case 3878:
case 2207:
case 4089:
case 2890:
case 3426:
case 2457:
case 398:
case 1814:
case 2218:
case 1889:
case 2232:
case 2918:
case 1047:
case 2693:
case 1070:
case 3287:
case 1810:
case 482:
case 3557:
case 338:
case 2081:
case 971:
case 3776:
case 2837:
case 3987:
case 2423:
case 2163:
case 3007:
case 361:
case 3226:
case 1628:
case 3611:
case 3946:
case 3051:
case 235:
case 2323:
case 3023:
case 305:
case 2343:
case 3926:
case 3501:
case 3481:
case 3108:
case 4036:
case 1648:
case 3719:
case 1086:
case 311:
case 1468:
case 3111:
case 152:
case 1553:
case 75:
case 1906:
case 1521:
case 1283:
case 625:
case 588:
case 3715:
case 154:
case 1712:
case 3784:
case 1003:
case 1535:
case 1541:
case 1206:
case 1456:
case 1983:
case 1148:
case 695:
case 2188:
case 258:
case 2700:
case 240:
case 225:
case 3617:
case 2243:
case 2951:
case 2046:
case 2923:
case 295:
case 3346:
case 1383:
case 2704:
case 2792:
case 2432:
case 1306:
case 1910:
case 3060:
case 2801:
case 2360:
case 4068:
case 280:
case 3045:
case 424:
case 3031:
case 2390:
case 2331:
case 2345:
case 3887:
case 2937:
case 3025:
case 422:
case 2325:
case 3049:
case 2364:
case 2832:
case 3982:
case 1559:
case 3002:
case 1533:
case 1758:
case 623:
case 2302:
case 2394:
case 1214:
case 3552:
case 1436:
case 2229:
case 1676:
case 3037:
case 3278:
case 2949:
case 2231:
case 2290:
case 223:
case 2929:
case 3978:
case 2945:
case 2249:
case 3881:
case 2931:
case 2990:
case 388:
case 824:
case 2716:
case 2264:
case 1389:
case 2294:
case 1868:
case 2202:
case 2452:
case 952:
case 1856:
case 2082:
case 1385:
case 3382:
case 2994:
case 822:
case 548:
case 550:
case 469:
case 3638:
case 538:
case 2671:
case 3502:
case 1505:
case 466:
case 1485:
case 1055:
case 3052:
case 1684:
case 1180:
case 3612:
case 1509:
case 676:
case 1615:
case 2578:
case 419:
case 3138:
case 3560:
case 4006:
case 353:
case 3590:
case 416:
case 1410:
case 2779:
case 1542:
case 171:
case 67:
case 3748:
case 2767:
case 778:
case 1522:
case 2851:
case 1184:
case 1680:
case 2797:
case 3549:
case 3112:
case 2695:
case 2677:
case 2144:
case 1336:
case 842:
case 2640:
case 86:
case 902:
case 617:
case 27:
case 2699:
case 904:
case 2582:
case 2494:
case 500:
case 1717:
case 2195:
case 866:
case 2449:
case 3537:
case 81:
case 2165:
case 2425:
case 2791:
case 2624:
case 3478:
case 2169:
case 2460:
case 2718:
case 810:
case 1866:
case 2605:
case 2954:
case 2142:
case 1858:
case 509:
case 3813:
case 2492:
case 506:
case 2515:
case 921:
case 1678:
case 3276:
case 2950:
case 3787:
case 2105:
case 2373:
case 50:
case 2622:
case 3976:
case 270:
case 2400:
case 3504:
case 3592:
case 1412:
case 3689:
case 1756:
case 460:
case 3562:
case 1599:
case 3614:
case 1682:
case 3685:
case 3110:
case 3054:
case 1798:
case 451:
case 670:
case 3500:
case 378:
case 2076:
case 4066:
case 3480:
case 3189:
case 2707:
case 3610:
case 1524:
case 2973:
case 3050:
case 753:
case 2450:
case 2159:
case 2723:
case 275:
case 2897:
case 68:
case 2867:
case 968:
case 1811:
case 3828:
case 2879:
case 2080:
case 3476:
case 941:
case 2454:
case 2292:
case 1338:
case 2659:
case 2262:
case 2019:
case 107:
case 918:
case 1071:
case 559:
case 2655:
case 4017:
case 2015:
case 2962:
case 3315:
case 815:
case 1312:
case 2576:
case 3000:
case 2861:
case 1044:
case 289:
case 3980:
case 3746:
case 415:
case 703:
case 1817:
case 3280:
case 3550:
case 3636:
case 1095:
case 3004:
case 3915:
case 1912:
case 1099:
case 1069:
case 1212:
case 4011:
case 3579:
case 2528:
case 2139:
case 2760:
case 212:
case 447:
case 3778:
case 2121:
case 1572:
case 1417:
case 2873:
case 863:
case 2548:
case 3313:
case 2434:
case 1358:
case 2639:
case 24:
case 2653:
case 2764:
case 264:
case 2635:
case 2641:
case 2916:
case 1366:
case 474:
case 3448:
case 748:
case 750:
case 2127:
case 2850:
case 168:
case 2737:
case 2497:
case 664:
case 981:
case 356:
case 3198:
case 413:
case 3876:
case 2479:
case 472:
case 3591:
case 1710:
case 3168:
case 1411:
case 2147:
case 3428:
case 1258:
case 3656:
case 649:
case 1408:
case 3016:
case 646:
case 1789:
case 1181:
case 2316:
case 907:
case 1958:
case 463:
case 711:
case 3913:
case 3668:
case 2513:
case 2686:
case 29:
case 578:
case 3884:
case 2934:
case 837:
case 639:
case 1308:
case 2234:
case 131:
case 3328:
case 2186:
case 3079:
case 497:
case 1311:
case 299:
case 1217:
case 3880:
case 2397:
case 3097:
case 3075:
case 2048:
case 3348:
case 63:
case 2367:
case 1088:
case 1126:
case 1496:
case 957:
case 897:
case 3516:
case 1563:
case 2892:
case 2334:
case 2862:
case 3413:
case 1458:
case 3606:
case 827:
case 1146:
case 3034:
case 1211:
case 1626:
case 69:
case 3948:
case 2967:
case 798:
case 1317:
case 236:
case 1911:
case 3061:
case 2800:
case 2361:
case 191:
case 2297:
case 62:
case 2267:
case 3106:
case 2330:
case 755:
case 1000:
case 2344:
case 3044:
case 1136:
case 1726:
case 637:
case 1746:
case 49:
case 3817:
case 1280:
case 3024:
case 1550:
case 2377:
case 2395:
case 2340:
case 3783:
case 3077:
case 4048:
case 1092:
case 1219:
case 2271:
case 2365:
case 2399:
case 3099:
case 499:
case 496:
case 297:
case 3020:
case 1919:
case 1284:
case 2971:
case 4028:
case 2320:
case 2872:
case 2244:
case 627:
case 2924:
case 3811:
case 1476:
case 959:
case 697:
case 1380:
case 2038:
case 2240:
case 568:
case 2277:
case 2920:
case 3808:
case 307:
case 2371:
case 2969:
case 3071:
case 436:
case 237:
case 2940:
case 2299:
case 2652:
case 2269:
case 1384:
case 95:
case 1484:
case 1592:
case 1504:
case 1689:
case 1415:
case 3412:
case 3756:
case 2893:
case 2727:
case 3565:
case 1562:
case 531:
case 1614:
case 3768:
case 2747:
case 1110:
case 3682:
case 1685:
case 449:
case 473:
case 1054:
case 3520:
case 3544:
case 1781:
case 1480:
case 178:
case 464:
case 1114:
case 2774:
case 1610:
case 1185:
case 44:
case 2721:
case 2664:
case 3178:
case 2129:
case 3896:
case 272:
case 2753:
case 2160:
case 2538:
case 2499:
case 521:
case 3571:
case 2145:
case 84:
case 1813:
case 2125:
case 2741:
case 591:
case 2735:
case 2477:
case 274:
case 2512:
case 862:
case 2424:
case 3678:
case 814:
case 2629:
case 2690:
case 263:
case 2194:
case 2631:
case 906:
case 2625:
case 846:
case 2649:
case 601:
case 3126:
case 1683:
case 3908:
case 665:
case 3496:
case 2869:
case 3736:
case 1516:
case 3563:
case 2840:
case 2895:
case 2865:
case 3208:
case 1034:
case 1606:
case 4084:
case 3211:
case 2972:
case 2657:
case 3626:
case 2017:
case 615:
case 886:
case 1061:
case 4019:
case 106:
case 1030:
case 1248:
case 687:
case 3646:
case 1106:
case 2493:
case 2558:
case 2759:
case 2463:
case 2151:
case 1884:
case 2988:
case 3838:
case 2143:
case 287:
case 486:
case 1819:
case 3308:
case 3217:
case 1880:
case 1075:
case 3072:
case 3917:
case 1156:
case 1448:
case 507:
case 2472:
case 3681:
case 1876:
case 1561:
case 3710:
case 1591:
case 1428:
case 2607:
case 1168:
case 3411:
case 3258:
case 651:
case 1213:
case 3966:
case 1016:
case 1698:
case 1913:
case 3063:
case 3266:
case 3785:
case 1782:
case 3714:
case 2107:
case 15:
case 2393:
case 1668:
case 2742:
case 251:
case 1579:
case 2511:
case 3687:
case 7:
case 2118:
case 2601:
case 2132:
case 2705:
case 2058:
case 3358:
case 2993:
case 2618:
case 3396:
case 2709:
case 2101:
case 2293:
case 4076:
case 2488:
case 2508:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744840801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,];
var gg_b = "1744840801/";

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
