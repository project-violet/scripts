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
case 3547:
case 639:
case 3487:
case 2060:
case 1995:
case 2404:
case 2000:
case 2464:
case 615:
case 3902:
case 1144:
case 3344:
case 3370:
case 3293:
case 3329:
case 1129:
case 4094:
case 1253:
case 993:
case 1730:
case 3973:
case 3013:
case 2556:
case 2841:
case 3459:
case 1499:
case 2247:
case 1016:
case 3033:
case 907:
case 1710:
case 991:
case 944:
case 2382:
case 1728:
case 3752:
case 1792:
case 3221:
case 3417:
case 3765:
case 1803:
case 3502:
case 2956:
case 3562:
case 953:
case 1872:
case 2255:
case 1640:
case 734:
case 367:
case 606:
case 416:
case 951:
case 86:
case 3866:
case 410:
case 1780:
case 998:
case 2993:
case 600:
case 1086:
case 2150:
case 2202:
case 69:
case 1178:
case 2647:
case 3231:
case 1594:
case 170:
case 2981:
case 3269:
case 3554:
case 1397:
case 3197:
case 1696:
case 952:
case 2068:
case 359:
case 203:
case 3466:
case 1157:
case 1675:
case 3091:
case 2509:
case 2143:
case 3211:
case 33:
case 1653:
case 1472:
case 795:
case 3389:
case 1403:
case 3693:
case 2911:
case 1899:
case 2071:
case 1994:
case 555:
case 71:
case 3954:
case 2655:
case 2441:
case 1274:
case 4095:
case 1720:
case 992:
case 2717:
case 3361:
case 1779:
case 1145:
case 570:
case 1161:
case 984:
case 3339:
case 195:
case 1101:
case 3281:
case 2864:
case 3887:
case 2322:
case 1788:
case 770:
case 51:
case 2192:
case 429:
case 3585:
case 3445:
case 3461:
case 2128:
case 3782:
case 3401:
case 401:
case 2352:
case 2305:
case 1093:
case 3642:
case 2832:
case 2365:
case 3236:
case 2341:
case 2516:
case 3053:
case 613:
case 2634:
case 1500:
case 3844:
case 2625:
case 3924:
case 1560:
case 4068:
case 3829:
case 2812:
case 1233:
case 3216:
case 2498:
case 2422:
case 2249:
case 1497:
case 408:
case 1106:
case 3306:
case 2890:
case 457:
case 1021:
case 3366:
case 2235:
case 3457:
case 3667:
case 2446:
case 3478:
case 1623:
case 1283:
case 784:
case 2916:
case 2076:
case 2744:
case 2729:
case 2770:
case 3163:
case 970:
case 1900:
case 1363:
case 3535:
case 3489:
case 1960:
case 976:
case 3732:
case 3549:
case 3103:
case 3524:
case 804:
case 2936:
case 152:
case 3286:
case 1127:
case 3626:
case 3327:
case 591:
case 2907:
case 2685:
case 3984:
case 2967:
case 2482:
case 198:
case 2542:
case 2739:
case 793:
case 2701:
case 2761:
case 1117:
case 1758:
case 2490:
case 3534:
case 8:
case 3722:
case 2214:
case 3857:
case 2188:
case 1897:
case 3525:
case 469:
case 3251:
case 1508:
case 1613:
case 1137:
case 205:
case 153:
case 791:
case 3878:
case 707:
case 3242:
case 1777:
case 3444:
case 2951:
case 210:
case 2507:
case 2615:
case 3746:
case 2778:
case 3819:
case 3387:
case 1187:
case 3686:
case 144:
case 2942:
case 158:
case 2822:
case 2364:
case 107:
case 2898:
case 3839:
case 3934:
case 1081:
case 3267:
case 2284:
case 1571:
case 612:
case 3925:
case 3861:
case 2432:
case 2789:
case 1159:
case 1908:
case 1223:
case 1968:
case 55:
case 3064:
case 1690:
case 217:
case 2087:
case 1989:
case 2708:
case 3004:
case 106:
case 2374:
case 388:
case 2943:
case 1038:
case 2558:
case 825:
case 3871:
case 1485:
case 1545:
case 1561:
case 1957:
case 1742:
case 1539:
case 2059:
case 515:
case 1222:
case 3791:
case 1682:
case 75:
case 2181:
case 59:
case 1079:
case 2017:
case 1020:
case 2977:
case 1919:
case 2891:
case 1424:
case 2297:
case 1632:
case 2483:
case 15:
case 2958:
case 949:
case 2543:
case 1246:
case 2131:
case 139:
case 319:
case 1961:
case 1945:
case 912:
case 2037:
case 278:
case 1939:
case 1557:
case 1415:
case 3723:
case 335:
case 4044:
case 2111:
case 3243:
case 1578:
case 3394:
case 4029:
case 1194:
case 1354:
case 1707:
case 1088:
case 3677:
case 3376:
case 1815:
case 2550:
case 450:
case 1425:
case 2121:
case 2760:
case 343:
case 1698:
case 3408:
case 3468:
case 2006:
case 1824:
case 3250:
case 1302:
case 3733:
case 1944:
case 1929:
case 1970:
case 1010:
case 1835:
case 1373:
case 2491:
case 3395:
case 4061:
case 865:
case 846:
case 4039:
case 840:
case 695:
case 4001:
case 496:
case 3065:
case 272:
case 2353:
case 2193:
case 1885:
case 490:
case 3005:
case 61:
case 2950:
case 2833:
case 1212:
case 2375:
case 4089:
case 1092:
case 3860:
case 4078:
case 1570:
case 1544:
case 3800:
case 1786:
case 354:
case 348:
case 3147:
case 2423:
case 655:
case 2813:
case 4057:
case 1559:
case 1264:
case 2001:
case 711:
case 2061:
case 1709:
case 577:
case 809:
case 2453:
case 3238:
case 1769:
case 4027:
case 513:
case 2518:
case 118:
case 2323:
case 3630:
case 275:
case 713:
case 777:
case 1917:
case 2019:
case 1077:
case 2840:
case 1058:
case 2107:
case 2538:
case 3184:
case 1711:
case 789:
case 3220:
case 3279:
case 1537:
case 1959:
case 3368:
case 2588:
case 1334:
case 862:
case 385:
case 2078:
case 3774:
case 3125:
case 692:
case 1987:
case 2089:
case 2520:
case 1641:
case 1665:
case 111:
case 830:
case 2151:
case 1043:
case 3114:
case 3628:
case 472:
case 2391:
case 1473:
case 518:
case 2980:
case 915:
case 1527:
case 2510:
case 2383:
case 112:
case 2699:
case 3753:
case 3135:
case 693:
case 3124:
case 1324:
case 3775:
case 3503:
case 1756:
case 2530:
case 3494:
case 2186:
case 3090:
case 3796:
case 1506:
case 149:
case 473:
case 3638:
case 95:
case 4087:
case 360:
case 644:
case 861:
case 658:
case 2848:
case 2263:
case 607:
case 1241:
case 2580:
case 2440:
case 2044:
case 2776:
case 464:
case 3748:
case 2029:
case 1205:
case 1252:
case 1100:
case 3688:
case 3228:
case 653:
case 1160:
case 1721:
case 3360:
case 3292:
case 874:
case 2930:
case 2333:
case 2116:
case 3679:
case 549:
case 900:
case 1385:
case 2592:
case 99:
case 1906:
case 3032:
case 868:
case 651:
case 906:
case 822:
case 1966:
case 2853:
case 3655:
case 3581:
case 2859:
case 839:
case 815:
case 3405:
case 1695:
case 44:
case 3673:
case 963:
case 3662:
case 3452:
case 299:
case 1818:
case 2361:
case 725:
case 1358:
case 2887:
case 1084:
case 3804:
case 525:
case 2281:
case 1198:
case 3737:
case 1838:
case 961:
case 85:
case 3177:
case 2269:
case 3981:
case 1146:
case 1430:
case 3647:
case 3346:
case 2209:
case 780:
case 3008:
case 2764:
case 259:
case 786:
case 1343:
case 1410:
case 2211:
case 3509:
case 1014:
case 1974:
case 4053:
case 3569:
case 1820:
case 922:
case 968:
case 806:
case 2693:
case 89:
case 800:
case 2681:
case 1035:
case 2221:
case 540:
case 2417:
case 1420:
case 2827:
case 1810:
case 565:
case 546:
case 921:
case 2705:
case 2573:
case 1276:
case 2741:
case 909:
case 1830:
case 3255:
case 2437:
case 1015:
case 637:
case 3150:
case 2806:
case 1350:
case 765:
case 3273:
case 3390:
case 740:
case 1548:
case 3262:
case 2866:
case 1112:
case 3464:
case 3706:
case 3312:
case 1694:
case 3060:
case 3404:
case 3766:
case 2611:
case 165:
case 2962:
case 62:
case 962:
case 2370:
case 2329:
case 1438:
case 3247:
case 2631:
case 1772:
case 2609:
case 1703:
case 3865:
case 1575:
case 2669:
case 1892:
case 3593:
case 1553:
case 1828:
case 2033:
case 3852:
case 2256:
case 3727:
case 136:
case 2914:
case 3615:
case 2746:
case 2074:
case 1877:
case 3951:
case 523:
case 130:
case 3507:
case 1338:
case 2470:
case 3412:
case 3898:
case 3757:
case 3942:
case 721:
case 3304:
case 1318:
case 3649:
case 3118:
case 3284:
case 2207:
case 2845:
case 2861:
case 2839:
case 877:
case 2934:
case 509:
case 37:
case 2267:
case 2199:
case 723:
case 940:
case 3526:
case 3432:
case 946:
case 2359:
case 889:
case 3234:
case 818:
case 2889:
case 3225:
case 728:
case 3761:
case 2317:
case 1320:
case 530:
case 123:
case 2616:
case 3120:
case 3482:
case 3739:
case 1923:
case 2525:
case 2798:
case 3094:
case 736:
case 3490:
case 562:
case 1388:
case 4013:
case 730:
case 3188:
case 2857:
case 3214:
case 109:
case 2878:
case 2242:
case 3926:
case 3719:
case 604:
case 414:
case 2337:
case 2636:
case 305:
case 2515:
case 3890:
case 679:
case 2366:
case 3235:
case 2667:
case 3249:
case 3684:
case 2607:
case 561:
case 925:
case 3076:
case 3770:
case 2478:
case 3586:
case 763:
case 1330:
case 168:
case 563:
case 2549:
case 2732:
case 2524:
case 1671:
case 427:
case 1055:
case 3882:
case 1002:
case 2286:
case 3110:
case 761:
case 1310:
case 1073:
case 1913:
case 522:
case 1152:
case 3614:
case 3192:
case 2461:
case 1165:
case 1141:
case 986:
case 3365:
case 161:
case 3341:
case 4091:
case 2053:
case 574:
case 2642:
case 43:
case 3986:
case 774:
case 2924:
case 2829:
case 1477:
case 1668:
case 1983:
case 3422:
case 1513:
case 768:
case 1380:
case 722:
case 3812:
case 163:
case 2216:
case 3193:
case 2005:
case 1229:
case 1244:
case 3950:
case 2065:
case 1990:
case 3353:
case 1426:
case 16:
case 1735:
case 987:
case 1175:
case 431:
case 1467:
case 2800:
case 485:
case 1407:
case 2860:
case 9:
case 3396:
case 1196:
case 1512:
case 433:
case 3813:
case 3423:
case 2677:
case 3348:
case 1590:
case 680:
case 438:
case 3006:
case 2468:
case 2658:
case 3121:
case 686:
case 243:
case 1932:
case 1321:
case 3066:
case 2162:
case 426:
case 3491:
case 2173:
case 2250:
case 1661:
case 1451:
case 3027:
case 420:
case 1785:
case 1072:
case 76:
case 2155:
case 241:
case 3883:
case 2395:
case 1582:
case 1442:
case 294:
case 1851:
case 3297:
case 1257:
case 3017:
case 3958:
case 3109:
case 1331:
case 1278:
case 3131:
case 3771:
case 1998:
case 4012:
case 737:
case 1670:
case 1289:
case 2597:
case 665:
case 2154:
case 1784:
case 364:
case 1311:
case 2394:
case 2868:
case 2650:
case 373:
case 1261:
case 2004:
case 3708:
case 1867:
case 2400:
case 2064:
case 1239:
case 317:
case 137:
case 1522:
case 1734:
case 3823:
case 3374:
case 3413:
case 1725:
case 3340:
case 1219:
case 947:
case 1826:
case 1714:
case 1946:
case 2791:
case 904:
case 855:
case 2258:
case 3776:
case 3029:
case 483:
case 3474:
case 1336:
case 1113:
case 3580:
case 3136:
case 3313:
case 3440:
case 2903:
case 609:
case 2360:
case 2292:
case 3896:
case 104:
case 2300:
case 2963:
case 621:
case 2972:
case 852:
case 147:
case 1316:
case 1133:
case 3333:
case 2679:
case 937:
case 1565:
case 1541:
case 1481:
case 3930:
case 1762:
case 1773:
case 1552:
case 3528:
case 623:
case 3592:
case 547:
case 2895:
case 3510:
case 3383:
case 2230:
case 232:
case 1431:
case 1659:
case 1469:
case 3980:
case 1206:
case 662:
case 2082:
case 92:
case 884:
case 2563:
case 1941:
case 1965:
case 1905:
case 1411:
case 3530:
case 3928:
case 2115:
case 3263:
case 1952:
case 266:
case 1747:
case 4064:
case 3203:
case 2999:
case 1811:
case 779:
case 2220:
case 2279:
case 2680:
case 3057:
case 3918:
case 2774:
case 2046:
case 2125:
case 5:
case 663:
case 1869:
case 3520:
case 231:
case 587:
case 2495:
case 1809:
case 3089:
case 1342:
case 3142:
case 1904:
case 844:
case 4065:
case 2114:
case 2288:
case 2628:
case 1191:
case 891:
case 1351:
case 3151:
case 579:
case 2610:
case 1627:
case 3045:
case 3061:
case 1287:
case 3475:
case 1493:
case 2238:
case 2371:
case 853:
case 220:
case 3603:
case 3518:
case 226:
case 3874:
case 443:
case 3920:
case 3979:
case 3019:
case 1504:
case 3299:
case 1123:
case 3167:
case 1456:
case 2098:
case 187:
case 3107:
case 622:
case 3538:
case 96:
case 1307:
case 3496:
case 2184:
case 851:
case 1163:
case 2055:
case 3372:
case 1535:
case 1732:
case 3960:
case 1489:
case 3303:
case 1524:
case 352:
case 1327:
case 2443:
case 959:
case 1626:
case 3127:
case 1985:
case 480:
case 3497:
case 1712:
case 1306:
case 3106:
case 2850:
case 93:
case 1607:
case 3021:
case 486:
case 1515:
case 274:
case 3166:
case 1366:
case 3623:
case 1478:
case 3283:
case 2933:
case 3500:
case 2477:
case 1419:
case 1844:
case 1829:
case 1949:
case 3056:
case 263:
case 4034:
case 3233:
case 2983:
case 2458:
case 2668:
case 999:
case 1790:
case 4025:
case 384:
case 2392:
case 1461:
case 1651:
case 1782:
case 2328:
case 3691:
case 1439:
case 1915:
case 1075:
case 1401:
case 631:
case 2105:
case 1642:
case 261:
case 1236:
case 4014:
case 1053:
case 1267:
case 1934:
case 914:
case 1845:
case 632:
case 1925:
case 78:
case 3908:
case 3399:
case 3223:
case 1199:
case 4049:
case 3683:
case 3968:
case 1470:
case 2271:
case 236:
case 1040:
case 1819:
case 2991:
case 1686:
case 1387:
case 358:
case 1226:
case 344:
case 660:
case 896:
case 666:
case 307:
case 2164:
case 4015:
case 446:
case 465:
case 2600:
case 1857:
case 3897:
case 1525:
case 1251:
case 1798:
case 1636:
case 3137:
case 3613:
case 3508:
case 353:
case 3568:
case 1242:
case 1878:
case 1889:
case 1984:
case 2591:
case 1514:
case 856:
case 2268:
case 398:
case 2923:
case 18:
case 967:
case 351:
case 223:
case 3633:
case 2320:
case 1437:
case 3640:
case 714:
case 2015:
case 2830:
case 2295:
case 2190:
case 1866:
case 2953:
case 3576:
case 688:
case 2350:
case 98:
case 1806:
case 3728:
case 1947:
case 2810:
case 1827:
case 428:
case 3792:
case 2035:
case 1681:
case 1555:
case 2420:
case 1417:
case 2479:
case 1221:
case 1765:
case 3803:
case 1741:
case 1083:
case 2996:
case 1705:
case 3872:
case 2276:
case 2132:
case 2703:
case 1669:
case 1459:
case 2763:
case 3499:
case 1609:
case 567:
case 2772:
case 3976:
case 1033:
case 2553:
case 2828:
case 3016:
case 1256:
case 3296:
case 2418:
case 2892:
case 2694:
case 1487:
case 1611:
case 334:
case 3275:
case 2880:
case 1955:
case 2112:
case 1902:
case 3129:
case 1329:
case 4054:
case 3730:
case 246:
case 265:
case 1013:
case 2540:
case 2480:
case 3067:
case 1621:
case 3007:
case 1887:
case 422:
case 2084:
case 286:
case 1319:
case 3119:
case 2676:
case 3648:
case 280:
case 2838:
case 1023:
case 4002:
case 3899:
case 878:
case 559:
case 1954:
case 4073:
case 3274:
case 1859:
case 2492:
case 694:
case 3161:
case 3779:
case 682:
case 1339:
case 2428:
case 4055:
case 3101:
case 395:
case 864:
case 3675:
case 2974:
case 2014:
case 3718:
case 461:
case 2820:
case 2940:
case 2294:
case 817:
case 2343:
case 225:
case 2799:
case 3463:
case 1693:
case 1231:
case 3594:
case 1378:
case 376:
case 3178:
case 2146:
case 871:
case 3738:
case 599:
case 3696:
case 1197:
case 648:
case 3397:
case 654:
case 159:
case 1764:
case 1406:
case 355:
case 3157:
case 1704:
case 1466:
case 46:
case 1495:
case 2831:
case 3605:
case 2904:
case 2869:
case 2237:
case 311:
case 3455:
case 810:
case 131:
case 3641:
case 726:
case 1288:
case 3652:
case 538:
case 3854:
case 313:
case 133:
case 3537:
case 1308:
case 738:
case 3108:
case 2811:
case 1999:
case 3168:
case 377:
case 1368:
case 1476:
case 1134:
case 3334:
case 389:
case 1046:
case 1774:
case 982:
case 1740:
case 3325:
case 994:
case 318:
case 2504:
case 138:
case 3587:
case 733:
case 3447:
case 1630:
case 2564:
case 2259:
case 785:
case 2754:
case 3058:
case 1218:
case 1022:
case 3384:
case 2456:
case 2666:
case 1098:
case 4063:
case 3559:
case 4072:
case 4003:
case 2627:
case 2:
case 731:
case 3204:
case 1610:
case 2287:
case 1599:
case 3709:
case 126:
case 3769:
case 948:
case 2493:
case 120:
case 732:
case 1679:
case 1620:
case 560:
case 2133:
case 2702:
case 2481:
case 2541:
case 1280:
case 3966:
case 2113:
case 2336:
case 3241:
case 42:
case 3847:
case 1963:
case 3100:
case 247:
case 1228:
case 745:
case 766:
case 3160:
case 204:
case 1292:
case 2905:
case 3604:
case 2687:
case 1494:
case 2386:
case 2965:
case 3454:
case 2821:
case 1796:
case 349:
case 3506:
case 3566:
case 1876:
case 2747:
case 166:
case 981:
case 437:
case 1115:
case 3793:
case 935:
case 3855:
case 2409:
case 919:
case 2183:
case 3527:
case 1895:
case 2431:
case 1572:
case 2266:
case 1135:
case 3862:
case 3873:
case 3802:
case 2206:
case 1124:
case 1503:
case 1149:
case 1618:
case 1775:
case 119:
case 2629:
case 3825:
case 2644:
case 3945:
case 614:
case 3939:
case 3901:
case 447:
case 1723:
case 135:
case 2546:
case 3578:
case 183:
case 3612:
case 788:
case 1808:
case 2257:
case 3435:
case 588:
case 3079:
case 2851:
case 3424:
case 2369:
case 181:
case 808:
case 3632:
case 945:
case 35:
case 3246:
case 2922:
case 2278:
case 2331:
case 142:
case 857:
case 1997:
case 1871:
case 583:
case 2219:
case 1277:
case 3539:
case 3222:
case 3978:
case 535:
case 3682:
case 803:
case 1791:
case 2416:
case 2381:
case 1400:
case 2867:
case 542:
case 3519:
case 3690:
case 1064:
case 2245:
case 581:
case 2261:
case 3989:
case 1460:
case 1650:
case 735:
case 1004:
case 3884:
case 2598:
case 829:
case 2174:
case 667:
case 2725:
case 2522:
case 188:
case 801:
case 783:
case 3038:
case 2734:
case 3529:
case 541:
case 3484:
case 3544:
case 1800:
case 2467:
case 594:
case 2356:
case 3786:
case 2982:
case 148:
case 154:
case 2715:
case 3347:
case 659:
case 1147:
case 802:
case 2512:
case 2836:
case 1783:
case 1065:
case 2270:
case 2393:
case 1005:
case 63:
case 3028:
case 794:
case 2816:
case 3212:
case 1052:
case 2175:
case 2532:
case 2749:
case 26:
case 2426:
case 2645:
case 2451:
case 2661:
case 3302:
case 3716:
case 3824:
case 3010:
case 3849:
case 3929:
case 3414:
case 2601:
case 3835:
case 3373:
case 554:
case 2639:
case 699:
case 194:
case 2582:
case 182:
case 2785:
case 3355:
case 2912:
case 141:
case 2072:
case 3176:
case 2619:
case 931:
case 487:
case 2590:
case 1713:
case 3736:
case 2321:
case 2932:
case 143:
case 3698:
case 479:
case 748:
case 754:
case 1658:
case 1468:
case 2971:
case 2897:
case 2011:
case 716:
case 3450:
case 1094:
case 1490:
case 2758:
case 3388:
case 710:
case 826:
case 309:
case 1846:
case 902:
case 2137:
case 820:
case 253:
case 2069:
case 3591:
case 1234:
case 1907:
case 2009:
case 251:
case 1179:
case 2633:
case 3379:
case 1739:
case 1542:
case 298:
case 1482:
case 3843:
case 1284:
case 1649:
case 3318:
case 505:
case 833:
case 17:
case 2081:
case 2743:
case 2223:
case 2399:
case 2683:
case 1526:
case 2968:
case 1789:
case 293:
case 2908:
case 116:
case 1615:
case 336:
case 3991:
case 330:
case 4086:
case 207:
case 3164:
case 291:
case 3858:
case 3523:
case 705:
case 1304:
case 1822:
case 1942:
case 1285:
case 2500:
case 3668:
case 3458:
case 292:
case 1180:
case 2056:
case 470:
case 3513:
case 1498:
case 363:
case 2750:
case 1812:
case 3152:
case 3392:
case 1341:
case 957:
case 1365:
case 2213:
case 696:
case 860:
case 3141:
case 3165:
case 3105:
case 908:
case 2093:
case 866:
case 845:
case 1305:
case 60:
case 41:
case 1986:
case 2960:
case 1095:
case 4026:
case 1215:
case 2372:
case 252:
case 1882:
case 3310:
case 3583:
case 3062:
case 3073:
case 1890:
case 374:
case 2166:
case 1235:
case 1249:
case 2497:
case 2106:
case 1224:
case 675:
case 1744:
case 1076:
case 997:
case 1770:
case 1729:
case 3330:
case 2623:
case 4007:
case 368:
case 650:
case 3294:
case 4093:
case 2051:
case 1509:
case 3410:
case 21:
case 557:
case 3343:
case 2718:
case 3820:
case 672:
case 508:
case 3940:
case 2403:
case 2189:
case 624:
case 325:
case 888:
case 197:
case 101:
case 270:
case 4056:
case 3034:
case 1346:
case 276:
case 3430:
case 1647:
case 3146:
case 484:
case 3025:
case 255:
case 2157:
case 2696:
case 757:
case 1158:
case 3358:
case 3084:
case 1931:
case 3480:
case 1864:
case 1398:
case 3574:
case 881:
case 380:
case 1737:
case 3838:
case 703:
case 386:
case 842:
case 157:
case 3377:
case 2119:
case 1581:
case 2240:
case 1465:
case 1655:
case 819:
case 2274:
case 452:
case 1405:
case 1911:
case 2994:
case 729:
case 1673:
case 2139:
case 1452:
case 1662:
case 2101:
case 295:
case 3818:
case 2026:
case 701:
case 1602:
case 2145:
case 2779:
case 2720:
case 3763:
case 498:
case 1247:
case 2499:
case 3772:
case 3575:
case 1921:
case 1332:
case 451:
case 1841:
case 4009:
case 2296:
case 3892:
case 4031:
case 702:
case 2976:
case 3553:
case 2016:
case 4069:
case 2710:
case 2275:
case 3880:
case 1000:
case 1312:
case 1706:
case 1654:
case 453:
case 3112:
case 1060:
case 1404:
case 1766:
case 2730:
case 365:
case 2253:
case 841:
case 340:
case 664:
case 3438:
case 2170:
case 673:
case 458:
case 2640:
case 491:
case 1521:
case 3975:
case 407:
case 1993:
case 2780:
case 1202:
case 1150:
case 1390:
case 1273:
case 769:
case 3953:
case 3548:
case 2792:
case 3035:
case 3479:
case 2728:
case 3182:
case 1956:
case 848:
case 2872:
case 905:
case 854:
case 3276:
case 2248:
case 3996:
case 406:
case 3965:
case 2664:
case 3941:
case 3821:
case 3411:
case 3227:
case 610:
case 400:
case 3687:
case 1186:
case 2050:
case 49:
case 1530:
case 1928:
case 2566:
case 1848:
case 3747:
case 3952:
case 2315:
case 2506:
case 1203:
case 1383:
case 3409:
case 1510:
case 2527:
case 212:
case 2793:
case 1980:
case 978:
case 3469:
case 67:
case 2802:
case 2324:
case 3266:
case 2335:
case 2873:
case 3617:
case 1116:
case 1333:
case 3702:
case 3316:
case 3133:
case 1875:
case 917:
case 45:
case 973:
case 3773:
case 1795:
case 4020:
case 1853:
case 2906:
case 3755:
case 1044:
case 1910:
case 1029:
case 1474:
case 3637:
case 4088:
case 1580:
case 2265:
case 2241:
case 3113:
case 439:
case 1896:
case 3856:
case 84:
case 2252:
case 605:
case 3564:
case 50:
case 3259:
case 2077:
case 1019:
case 2917:
case 1920:
case 972:
case 3504:
case 3123:
case 2587:
case 175:
case 1323:
case 3666:
case 3456:
case 1167:
case 88:
case 1794:
case 924:
case 1107:
case 2058:
case 3606:
case 3754:
case 1496:
case 3:
case 3627:
case 2204:
case 1045:
case 2937:
case 1475:
case 1001:
case 2769:
case 2171:
case 3493:
case 4010:
case 790:
case 1520:
case 1579:
case 3869:
case 4028:
case 211:
case 2455:
case 3809:
case 4092:
case 2605:
case 1142:
case 3342:
case 3191:
case 2473:
case 2402:
case 190:
case 2781:
case 3811:
case 2168:
case 3217:
case 213:
case 775:
case 2537:
case 1057:
case 2108:
case 756:
case 289:
case 1078:
case 1588:
case 1448:
case 4080:
case 750:
case 2414:
case 814:
case 2290:
case 2944:
case 3645:
case 3661:
case 3451:
case 772:
case 2302:
case 2824:
case 2849:
case 2970:
case 2929:
case 3912:
case 3072:
case 724:
case 2030:
case 2425:
case 1348:
case 3590:
case 572:
case 418:
case 1700:
case 1006:
case 3932:
case 3321:
case 996:
case 1121:
case 1156:
case 3467:
case 3356:
case 489:
case 1697:
case 2484:
case 1396:
case 2544:
case 603:
case 3836:
case 2232:
case 1813:
case 3982:
case 2347:
case 1423:
case 3393:
case 2885:
case 1950:
case 975:
case 3689:
case 1353:
case 172:
case 3735:
case 867:
case 3724:
case 2028:
case 3816:
case 2212:
case 1833:
case 697:
case 956:
case 3749:
case 601:
case 3219:
case 1059:
case 2539:
case 2561:
case 171:
case 859:
case 2751:
case 1433:
case 1181:
case 2978:
case 3946:
case 2222:
case 3714:
case 2018:
case 602:
case 2682:
case 578:
case 3261:
case 3807:
case 449:
case 1708:
case 2884:
case 778:
case 3867:
case 83:
case 3201:
case 337:
case 117:
case 200:
case 3522:
case 1558:
case 1823:
case 1943:
case 2038:
case 3598:
case 3140:
case 1340:
case 178:
case 1037:
case 215:
case 2834:
case 2415:
case 3670:
case 3629:
case 717:
case 3644:
case 2961:
case 3289:
case 2707:
case 2612:
case 2354:
case 571:
case 2088:
case 1111:
case 3311:
case 3486:
case 2194:
case 2578:
case 3546:
case 1297:
case 2589:
case 2814:
case 3257:
case 2020:
case 1017:
case 1109:
case 1958:
case 3309:
case 3922:
case 3278:
case 2246:
case 3331:
case 2632:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744617601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,];
var gg_b = "1744617601/";

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
